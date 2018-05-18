'use strict';
var nodes = function() {}
nodes.customNode = require('./nodeHelpers/customNode');
nodes.infuraNode = require('./nodeHelpers/infura');
nodes.metamaskNode = require('./nodeHelpers/metamask');
nodes.nodeTypes = {
    GOC: "GOC",
	ETH: "ETH",
    ETC: "ETC",
    MUS: "MUSIC",
    Ropsten: "ROPSTEN ETH",
    Kovan: "KOVAN ETH",
    Rinkeby: "RINKEBY ETH",
    RSK: "RSK",
    EXP: "EXP",
    UBQ: "UBQ",
    POA: "POA",
    TOMO: "TOMO",
    ELLA: "ELLA",
    ETSC: "ETSC",
    EGEM: "EGEM",
    CLO: "CLO",
    CLOT: "Testnet CLO",
    EAST: "EAST",
    Custom: "CUSTOM ETH"
};
nodes.ensNodeTypes = [nodes.nodeTypes.ETH, nodes.nodeTypes.Ropsten];
nodes.ensSubNodeTypes = [nodes.nodeTypes.ETH];
nodes.domainsaleNodeTypes = [nodes.nodeTypes.ETH, nodes.nodeTypes.Ropsten];
nodes.customNodeObj = {
    'name': 'CUS',
    'blockExplorerTX': '',
    'blockExplorerAddr': '',
    'type': nodes.nodeTypes.Custom,
    'eip155': false,
    'chainId': '',
    'tokenList': [],
    'abiList': [],
    'service': 'Custom',
    'lib': null
};
nodes.nodeList = {
	'goc': {
        'name': 'GOC',
        'blockExplorerTX': 'https://testnet-explorer.gochain.io/tx/[[txHash]]',
        'blockExplorerAddr': 'https://testnet-explorer.gochain.io/addr/[[address]]',
        'type': nodes.nodeTypes.GOC,
        'eip155': true,
        'chainId': 31337,
        'tokenList': require('./tokens/gocTokens.json'),
        'abiList': require('./abiDefinitions/gocAbi.json'),
        'service': 'GoChain',
        'lib': new nodes.customNode('https://testnet-rpc.gochain.io', '')
    }
};


nodes.ethPrice = require('./nodeHelpers/ethPrice');
module.exports = nodes;
