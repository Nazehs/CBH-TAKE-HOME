const { deterministicPartitionKey } = require("./dpk");

describe("deterministicPartitionKey", () => {
  it("Returns the literal '0' when given no input", () => {
    const trivialKey = deterministicPartitionKey();
    expect(trivialKey).toBe("0");
  });
  it("Returns the 'partitionKey' when partitionKey is given", () => {
    const partitionKey = deterministicPartitionKey({partitionKey:'partitionKey'});
    expect(partitionKey).toBe("partitionKey");
  });

  it("when candidate.length > MAX_PARTITION_KEY_LENGTH", () => {
    const partitionObj = {partitionKey:'dedfc7ddddd71057800ccefd4e8a339bcffa30c257886d2053f17682a466d0352cb4f5a80e089c0d787c39ef5dedfc7d71057800ccefd4e8a339bcffa30c257886d2053f17682a466d0352cb4f5a80e089c0d787c39ef508fcf78d5391c3596e8f33d1d15e3341964c517aa4e08fcf78d5391c3596e8f33d1d15e3341964c517aa4e'};
    const partitionKey = deterministicPartitionKey();
    expect(partitionKey.length <=128 ).toBe(true);
    expect(partitionObj.partitionKey.length >= 256).toBe(true);
  });
  it("Returns a hash value when  partitionKey is not provided", () => {
    const partitionKey = deterministicPartitionKey({id:''});
    expect(partitionKey).toBe("77828ce5a93b713735e4d8e8e4366375ac1e110db529e2ad029ec0b8e42cc53e578ebf6eb84bbeb114386ca38dfd0cec030d94f196901681790661ce3092c5e7");
  });
  it("Returns a string when a non string is provided as partitionKey", () => {
    const partitionKey = deterministicPartitionKey({partitionKey:12345});
    expect(partitionKey).toBe("12345");
    expect(typeof partitionKey).toBe("string");
  });
});
