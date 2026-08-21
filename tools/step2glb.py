#!/usr/bin/env python3
import sys, pathlib, argparse
from OCP.STEPCAFControl import STEPCAFControl_Reader
from OCP.TDocStd import TDocStd_Document
from OCP.TCollection import TCollection_ExtendedString, TCollection_AsciiString
from OCP.BRepMesh import BRepMesh_IncrementalMesh
from OCP.RWGltf import RWGltf_CafWriter
from OCP.TDF import TDF_LabelSequence
from OCP.XCAFApp import XCAFApp_Application
from OCP.XCAFDoc import XCAFDoc_DocumentTool

def convert(stp, glb, deflection=0.3):
    stp=str(stp); glb=str(glb)
    reader=STEPCAFControl_Reader()
    stat=reader.ReadFile(stp)
    if stat != 1:
        print(f"ReadFile failed {stat}")
        sys.exit(1)
    # need app for doc? but STEPCAF can transfer to doc without app
    doc=TDocStd_Document(TCollection_ExtendedString("doc"))
    ok=reader.Transfer(doc)
    if not ok:
        print("Transfer failed")
        sys.exit(1)
    # init XCAF
    XCAFDoc_DocumentTool.Set_s(doc.Main())
    shape_tool=XCAFDoc_DocumentTool.ShapeTool_s(doc.Main())
    seq=TDF_LabelSequence()
    shape_tool.GetFreeShapes(seq)
    print(f"free shapes {seq.Length()}")
    from OCP.TDF import TDF_ChildIterator
    from OCP.XCAFDoc import XCAFDoc_DocumentTool as XDT
    # mesh all shapes recursively
    def mesh_label(lbl):
        shape = shape_tool.GetShape_s(lbl)
        if not shape.IsNull():
            BRepMesh_IncrementalMesh(shape, deflection, False, 0.5, False)
        it=TDF_ChildIterator(lbl)
        while it.More():
            mesh_label(it.Value())
            it.Next()
    for i in range(seq.Length()):
        mesh_label(seq.Value(i+1))
    # also try to mesh via explicit free shapes iteration if above missed
    from OCP.TColStd import TColStd_IndexedDataMapOfStringString
    from OCP.Message import Message_ProgressRange
    writer=RWGltf_CafWriter(TCollection_AsciiString(glb), True)
    # True = binary GLB
    ok=writer.Perform(doc, TColStd_IndexedDataMapOfStringString(), Message_ProgressRange())
    if not ok:
        print("RWGltf_CafWriter Perform failed")
        sys.exit(1)
    print(f"written {glb} {pathlib.Path(glb).stat().st_size/1e6:.1f} MB")

if __name__=="__main__":
    ap=argparse.ArgumentParser()
    ap.add_argument("stp")
    ap.add_argument("glb")
    ap.add_argument("--deflection", type=float, default=0.3)
    a=ap.parse_args()
    convert(a.stp, a.glb, a.deflection)
