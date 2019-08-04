import { expect } from "chai";
import AiNotes from "../src/ai-notes";

describe("Testing AiNotes", () => {
  const defaultArgs = [];

  it("Class AiNotes can be instanciated", () => {
    expect(() => {
      new AiNotes(...defaultArgs);
    }).not.to.throw();
  });
});
