# Project Release Workflow

This document outlines the automated release workflow for our project, ensuring a smooth transition from code changes to a new version release. The workflow is divided into three main jobs: setup, process, and complete the release, managed through GitHub Actions.

## Workflow Overview

1. **Setup Release**: Prepares for the release by determining the next version number.
2. **Process Release**: Updates the version in the `test.adoc` file and uploads the updated file as an artifact.
3. **Complete Release**: Downloads the updated file and proceeds with the release process using the new version number.

## Workflow Diagram

Below is a Mermaid diagram that visualizes the sequence of operations in our release workflow:

```mermaid
sequenceDiagram
    participant SR as Setup Release
    participant UR as Update Release
    participant CR as Complete Release
    SR->>UR: Pass new_tag_version
    UR->>CR: Pass new_tag_version & updated-file artifact
    Note over SR,UR: Checkout & Setup Environment
    SR->>SR: Determine next release version
    UR->>UR: Update version in test.adoc
    UR->>UR: Upload updated-file artifact
    CR->>CR: Download updated-file artifact
    CR->>CR: Release with next Semantic Version