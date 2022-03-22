//SPDX-License-Identifier: Unlicense
pragma solidity ^0.8.0;

contract ChainWork {

    struct Job {
        string jobId;
        string jobDescription;
        uint pay;
        bool completed;
        address workerAddress;
    }

    mapping(string => Job) public jobPosts;

    function getJobPost(string memory _jobId) external view returns(Job memory) {
        return jobPosts[_jobId];
    }

    function createWork(string memory jobId, string memory _jobDescription, uint _pay, address _workerAddress) external {
        jobPosts[jobId] = Job(jobId, _jobDescription, _pay, false, _workerAddress);
    }

    function approveWork(string memory _jobId, address _workerAddress) external {
        Job storage job = jobPosts[_jobId];
        job.completed = true;
        job.workerAddress = _workerAddress;
    }
}