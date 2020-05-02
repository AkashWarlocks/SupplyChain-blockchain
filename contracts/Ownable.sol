pragma solidity 0.6.4;

contract Ownable{
    address public _owner;

    constructor() internal {
        _owner = msg.sender;
    }

    modifier onlyOwner(){
        require(isOwner(), "Ownable : Caller is not Owner");
        _;
    }

    function isOwner() public view returns (bool) {
        return (msg.sender == _owner);
    }
}