# MongoDB Update Bug
This repository demonstrates a common MongoDB error when updating documents and provides a solution.

## Bug Description
The provided code attempts to update a MongoDB document. If the document specified by the query does not exist, the `updateOne` operation fails and throws an error. The `modifiedCount` property of the result object will be 0.

## Solution
The solution utilizes the `upsert:true` option in the `updateOne` method. This ensures that if the document doesn't exist, a new document is inserted instead of throwing an error.