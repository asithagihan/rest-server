describe("Test /health", () => {
  describe("Check on /issues", () => {
    it("Issues should be okay", () => {
      expect(actualResult).to.equal("OK");
    });
  });
});
