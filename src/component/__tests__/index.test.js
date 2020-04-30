import React from "react";
import { shallow } from "enzyme";
import Container from "../index";
import MyDropZone from "../DragAndDrop";
import { Table } from "../styles";

describe("Container", () => {
  it("should render MyDropZone", () => {
    const Wrapper = shallow(<Container />);
    expect(Wrapper.find(MyDropZone).length).toBe(1);
  });

  it("should handle file upload", async () => {
    const Wrapper = shallow(<Container />);
    let f = new File(["abcd,acbd"], "filename.txt", {
      type: "text/plain",
      lastModified: new Date()
    });

    Wrapper.find(MyDropZone).prop("handleUpload")({
      target: {
        files: [f]
      }
    });

    await new Promise(resolve => setTimeout(resolve, 3000));
    Wrapper.update();
    expect(Wrapper.find(Table).length).toBe(1);
  });
});
