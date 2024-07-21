# Project Release Workflow

## Introduction
This document outlines our automated release workflow using GitHub Actions. The workflow is designed to streamline the release process, ensuring consistency and efficiency in deploying new versions of our project.

## Workflow Overview
The workflow consists of several key jobs: `setup_release`, `process_test_adoc`, `process_file2_md`, and `complete_release`. Each job plays a crucial role in preparing, documenting, and finalizing the release.

### Setup Release
The `setup_release` job is responsible for:
- Checking out the repository code.
- Caching npm dependencies to speed up the build process.
- Setting up the Node.js environment.
- Installing project dependencies.
- Determining the next release version using Semantic Release.

### Process Documentation
Documentation files `test.adoc` and `file2.md` are updated in the `process_test_adoc` and `process_file2_md` jobs, respectively. These jobs:
- Checkout the repository code.
- Update the version and date in the documentation files based on the new tag version determined by the `setup_release` job.

### Complete Release
The `complete_release` job finalizes the release by:
- Downloading updated documentation files.
- Caching npm dependencies.
- Setting up Node.js.
- Installing dependencies.
- Executing Semantic Release to publish the new version.

## Conditional Execution
Jobs in this workflow utilize conditional execution based on the availability of a new tag version. This ensures that steps such as updating documentation and finalizing the release are only executed when a new version is being released.

## Outputs
The workflow uses outputs to pass the new tag version between jobs, enabling conditional execution and the dynamic updating of documentation.

## Conclusion
This automated release workflow is a critical component of our project's development process, ensuring that new versions are released efficiently and consistently, with up-to-date documentation.

```mermaid
sequenceDiagram
    participant GH as GitHub Actions
    participant SR as Setup Release
    participant PTA as Process test.adoc
    participant PF2 as Process file2.md
    participant CR as Complete Release

    GH->>SR: Trigger Setup Release
    SR->>GH: Determine next release version
    SR->>PTA: Pass version to Process test.adoc
    SR->>PF2: Pass version to Process file2.md
    PTA->>CR: Update test.adoc with new version
    PF2->>CR: Update file2.md with new version
    CR->>GH: Finalize release with Semantic Version