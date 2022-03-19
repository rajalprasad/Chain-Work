//SPDX-License-Identifier: Unlicense
pragma solidity ^0.8.0;

contract ChainWork {

    address payable jobPosterAddress;
    address payable workerAddress;

    struct Job {
        uint jobId;
        string jobDescription;
        uint256 pay;
        bool completed;
    }

    mapping(uint => Job) public jobPosts;

    function getJobPost(uint _jobId) external view returns(Job memory) {
        return jobPosts[_jobId];
    }

    function createWork(uint _jobId, string memory _jobDescription, uint256 _pay) external {
        jobPosts[_jobId] = Job(_jobId, _jobDescription, _pay, false);
    }

    function approveWork(uint _jobId, address payable _workerAddress) external {
        Job memory job = jobPosts[_jobId];
        job.completed = true;
        (bool successful, ) = _workerAddress.call{value: job.pay}("");
        require(successful, "Failed to send pay");
    }

}