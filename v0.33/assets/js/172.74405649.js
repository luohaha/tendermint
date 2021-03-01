(window.webpackJsonp=window.webpackJsonp||[]).push([[172],{673:function(t,e,i){"use strict";i.r(e);var a=i(1),n=Object(a.a)({},(function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[i("h1",{attrs:{id:"draft-of-light-client-supervisor-for-discussion"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#draft-of-light-client-supervisor-for-discussion"}},[t._v("#")]),t._v(" Draft of Light Client Supervisor for discussion")]),t._v(" "),i("h2",{attrs:{id:"todos"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#todos"}},[t._v("#")]),t._v(" TODOs")]),t._v(" "),i("p",[t._v("This specification in done in parallel with updates on the\nverification specification. So some hyperlinks have to be placed to\nthe correct files eventually.")]),t._v(" "),i("h1",{attrs:{id:"light-client-sequential-supervisor"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#light-client-sequential-supervisor"}},[t._v("#")]),t._v(" Light Client Sequential Supervisor")]),t._v(" "),i("p",[t._v("The light client implements a read operation of a\n"),i("a",{attrs:{href:"TMBC-HEADER-link"}},[t._v("header")]),t._v(" from the "),i("a",{attrs:{href:"TMBC-SEQ-link"}},[t._v("blockchain")]),t._v(", by\ncommunicating with full nodes, a so-called primary and several\nso-called witnesses. As some full nodes may be faulty, this\nfunctionality must be implemented in a fault-tolerant way.")]),t._v(" "),i("p",[t._v("In the Tendermint blockchain, the validator set may change with every\nnew block.  The staking and unbonding mechanism induces a "),i("a",{attrs:{href:"TMBC-FM-2THIRDS-link"}},[t._v("security\nmodel")]),t._v(": starting at time "),i("em",[t._v("Time")]),t._v(" of the\n"),i("a",{attrs:{href:"TMBC-HEADER-link"}},[t._v("header")]),t._v(",\nmore than two-thirds of the next validators of a new block are correct\nfor the duration of "),i("em",[t._v("TrustedPeriod")]),t._v(".")]),t._v(" "),i("p",[i("a",{attrs:{href:"https://informal.systems",target:"_blank",rel:"noopener noreferrer"}},[t._v("Light Client Verification"),i("OutboundLink")],1),t._v(" implements the fault-tolerant read\noperation designed for this security model. That is, it is safe if the\nmodel assumptions are satisfied and makes progress if it communicates\nto a correct primary.")]),t._v(" "),i("p",[t._v("However, if the "),i("a",{attrs:{href:"TMBC-FM-2THIRDS-link"}},[t._v("security model")]),t._v(" is violated,\nfaulty peers (that have been validators at some point in the past) may\nlaunch attacks on the Tendermint network, and on the light\nclient. These attacks as well as an axiomatization of blocks in\ngeneral are defined in "),i("a",{attrs:{href:"https://informal.systems",target:"_blank",rel:"noopener noreferrer"}},[t._v("a document that contains the definitions that\nare currently in detection.md"),i("OutboundLink")],1),t._v(".")]),t._v(" "),i("p",[t._v("If there is a light client attack (but no\nsuccessful attack on the network), the safety of the verification step\nmay be violated (as we operate outside its basic assumption).\nThe light client also\ncontains a defense mechanism against light clients attacks, called detection.")]),t._v(" "),i("p",[i("a",{attrs:{href:"https://informal.systems",target:"_blank",rel:"noopener noreferrer"}},[t._v("Light Client Detection"),i("OutboundLink")],1),t._v(" implements a cross check of the result\nof the verification step. If there is a light client attack, and the\nlight client is connected to a correct peer, the light client as a\nwhole is safe, that is, it will not operate on invalid\nblocks. However, in this case it cannot successfully read, as\ninconsistent blocks are in the system. However, in this case the\ndetection performs a distributed computation that results in so-called\nevidence. Evidence can be used to prove\nto a correct full node that there has been a\nlight client attack.")]),t._v(" "),i("p",[i("a",{attrs:{href:"https://informal.systems",target:"_blank",rel:"noopener noreferrer"}},[t._v("Light Client Evidence Accountability"),i("OutboundLink")],1),t._v(" is a protocol run on a\nfull node to check whether submitted evidence indeed proves the\nexistence of a light client attack. Further, from the evidence and its\nown knowledge about the blockchain, the full node computes a set of\nbonded full nodes (that at some point had more than one third of the\nvoting power) that participated in the attack that will be reported\nvia ABCI to the application.")]),t._v(" "),i("p",[t._v("In this document we specify")]),t._v(" "),i("ul",[i("li",[t._v("Initialization of the Light Client")]),t._v(" "),i("li",[t._v("The interaction of "),i("a",{attrs:{href:"https://informal.systems",target:"_blank",rel:"noopener noreferrer"}},[t._v("verification"),i("OutboundLink")],1),t._v(" and "),i("a",{attrs:{href:"https://informal.systems",target:"_blank",rel:"noopener noreferrer"}},[t._v("detection"),i("OutboundLink")],1)])]),t._v(" "),i("p",[t._v("The details of these two protocols are captured in their own\ndocuments, as is the "),i("a",{attrs:{href:"https://informal.systems",target:"_blank",rel:"noopener noreferrer"}},[t._v("accountability"),i("OutboundLink")],1),t._v(" protocol.")]),t._v(" "),i("blockquote",[i("p",[t._v("Another related line is IBC attack detection and submission at the\nrelayer, as well as attack verification at the IBC handler. This\nwill call for yet another spec.")])]),t._v(" "),i("h1",{attrs:{id:"status"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#status"}},[t._v("#")]),t._v(" Status")]),t._v(" "),i("p",[t._v("This document is work in progress. In order to develop the\nspecification step-by-step,\nit assumes certain details of "),i("a",{attrs:{href:"https://informal.systems",target:"_blank",rel:"noopener noreferrer"}},[t._v("verification"),i("OutboundLink")],1),t._v(" and\n"),i("a",{attrs:{href:"https://informal.systems",target:"_blank",rel:"noopener noreferrer"}},[t._v("detection"),i("OutboundLink")],1),t._v(" that are not specified in the respective current\nversions yet. This inconsistencies will be addresses over several\nupcoming PRs.")]),t._v(" "),i("h1",{attrs:{id:"part-i-tendermint-blockchain"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#part-i-tendermint-blockchain"}},[t._v("#")]),t._v(" Part I - Tendermint Blockchain")]),t._v(" "),i("p",[t._v("See "),i("a",{attrs:{href:"addLinksWhenDone"}},[t._v("verification spec")])]),t._v(" "),i("h1",{attrs:{id:"part-ii-sequential-problem-definition"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#part-ii-sequential-problem-definition"}},[t._v("#")]),t._v(" Part II - Sequential Problem Definition")]),t._v(" "),i("h4",{attrs:{id:"lc-seq-init-live-1"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#lc-seq-init-live-1"}},[t._v("#")]),t._v(" "),i("strong",[t._v("[LC-SEQ-INIT-LIVE.1]")])]),t._v(" "),i("p",[t._v("Upon initialization, the light client gets as input a header of the\nblockchain, or the genesis file of the blockchain, and eventually\nstores a header of the blockchain.")]),t._v(" "),i("h4",{attrs:{id:"lc-seq-live-1"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#lc-seq-live-1"}},[t._v("#")]),t._v(" "),i("strong",[t._v("[LC-SEQ-LIVE.1]")])]),t._v(" "),i("p",[t._v("The light client gets a sequence of heights as inputs. For each input\nheight "),i("em",[t._v("targetHeight")]),t._v(", it eventually stores the header of height\n"),i("em",[t._v("targetHeight")]),t._v(".")]),t._v(" "),i("h4",{attrs:{id:"lc-seq-safe-1"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#lc-seq-safe-1"}},[t._v("#")]),t._v(" "),i("strong",[t._v("[LC-SEQ-SAFE.1]")])]),t._v(" "),i("p",[t._v("The light client never stores a header which is not in the blockchain.")]),t._v(" "),i("h1",{attrs:{id:"part-iii-light-client-as-distributed-system"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#part-iii-light-client-as-distributed-system"}},[t._v("#")]),t._v(" Part III - Light Client as Distributed System")]),t._v(" "),i("h2",{attrs:{id:"computational-model"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#computational-model"}},[t._v("#")]),t._v(" Computational Model")]),t._v(" "),i("p",[t._v("The light client communicates with remote processes only via the\n"),i("a",{attrs:{href:"TODO"}},[t._v("verification")]),t._v(" and the "),i("a",{attrs:{href:"TODO"}},[t._v("detection")]),t._v(" protocols. The\nrespective assumptions are given there.")]),t._v(" "),i("h2",{attrs:{id:"distributed-problem-statement"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#distributed-problem-statement"}},[t._v("#")]),t._v(" Distributed Problem Statement")]),t._v(" "),i("h3",{attrs:{id:"two-kinds-of-liveness"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#two-kinds-of-liveness"}},[t._v("#")]),t._v(" Two Kinds of Liveness")]),t._v(" "),i("p",[t._v("In case of light client attacks, the sequential problem statement\ncannot always be satisfied. The lightclient cannot decide which block\nis from the chain and which is not. As a result, the light client just\ncreates evidence, submits it, and terminates.\nFor the liveness property, we thus add the\npossibility that instead of adding a lightblock, we also might terminate\nin case there is an attack.")]),t._v(" "),i("h4",{attrs:{id:"lc-dist-term-1"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#lc-dist-term-1"}},[t._v("#")]),t._v(" "),i("strong",[t._v("[LC-DIST-TERM.1]")])]),t._v(" "),i("p",[t._v("The light client either runs forever or it "),i("em",[t._v("terminates on attack")]),t._v(".")]),t._v(" "),i("h3",{attrs:{id:"design-choices"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#design-choices"}},[t._v("#")]),t._v(" Design choices")]),t._v(" "),i("h4",{attrs:{id:"lc-dist-store-1"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#lc-dist-store-1"}},[t._v("#")]),t._v(" [LC-DIST-STORE.1]")]),t._v(" "),i("p",[t._v("The light client has a local data structure called LightStore\nthat contains light blocks (that contain a header).")]),t._v(" "),i("blockquote",[i("p",[t._v("The light store exposes functions to query and update it. They are\nspecified "),i("a",{attrs:{href:"TODO:onceVerificationIsMerged"}},[t._v("here")]),t._v(".")])]),t._v(" "),i("p",[i("strong",[t._v("TODO:")]),t._v(" reference light store invariant [LCV-INV-LS-ROOT.2] once\nverification is merged")]),t._v(" "),i("h4",{attrs:{id:"lc-dist-safe-1"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#lc-dist-safe-1"}},[t._v("#")]),t._v(" "),i("strong",[t._v("[LC-DIST-SAFE.1]")])]),t._v(" "),i("p",[t._v("It is always the case that every header in "),i("em",[t._v("LightStore")]),t._v(" was\ngenerated by an instance of Tendermint consensus.")]),t._v(" "),i("h4",{attrs:{id:"lc-dist-live-1"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#lc-dist-live-1"}},[t._v("#")]),t._v(" "),i("strong",[t._v("[LC-DIST-LIVE.1]")])]),t._v(" "),i("p",[t._v("Whenever the light client gets a new height "),i("em",[t._v("h")]),t._v(" as input,")]),t._v(" "),i("ul",[i("li",[t._v("and there is\nno light client attack up to height "),i("em",[t._v("h")]),t._v(", then the lightclient\neventually puts the lightblock of height "),i("em",[t._v("h")]),t._v(" in the lightstore and\nwait for another input.")]),t._v(" "),i("li",[t._v("otherwise, that is, if there\nis a light client attack on height "),i("em",[t._v("h")]),t._v(", then the light client\nmust perform one of the following:\n"),i("ul",[i("li",[t._v("it terminates on attack.")]),t._v(" "),i("li",[t._v("it eventually puts the lightblock of height "),i("em",[t._v("h")]),t._v(" in the lightstore and\nwait for another input.")])])])]),t._v(" "),i("blockquote",[i("p",[t._v('Observe that the "existence of a lightclient attack" just means that some node has generated a conflicting block. It does not necessarily mean that a (faulty) peer sends such a block to "our" lightclient. Thus, even if there is an attack somewhere in the system, our lightclient might still continue to operate normally.')])]),t._v(" "),i("h3",{attrs:{id:"solving-the-sequential-specification"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#solving-the-sequential-specification"}},[t._v("#")]),t._v(" Solving the sequential specification")]),t._v(" "),i("p",[t._v("[LC-DIST-SAFE.1] is guaranteed by the detector; in particular it\nfollows from\n"),i("a",{attrs:{href:"TODO"}},[t._v("[LCD-DIST-INV-STORE.1]")]),t._v(" "),i("a",{attrs:{href:"TODO"}},[t._v("[LCD-DIST-LIVE.1]")])]),t._v(" "),i("h1",{attrs:{id:"part-iv-light-client-supervisor-protocol"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#part-iv-light-client-supervisor-protocol"}},[t._v("#")]),t._v(" Part IV - Light Client Supervisor Protocol")]),t._v(" "),i("p",[t._v("We provide a specification for a sequential Light Client Supervisor.\nThe local code for verification is presented by a sequential function\n"),i("code",[t._v("Sequential-Supervisor")]),t._v(' to highlight the control flow of this\nfunctionality. Each lightblock is first verified with a primary, and then\ncross-checked with secondaries, and if all goes well, the lightblock\nis\nadded (with the attribute "trusted") to the\nlightstore. Intermiate lightblocks that were used to verify the target\nblock but were not cross-checked are stored as "verified"')]),t._v(" "),i("blockquote",[i("p",[t._v("We note that if a different concurrency model is considered\nfor an implementation, the semantics of the lightstore might change:\nIn a concurrent implementation, we might do verification for some\nheight "),i("em",[t._v("h")]),t._v(", add the\nlightblock to the lightstore, and start concurrent threads that")]),t._v(" "),i("ul",[i("li",[t._v("do verification for the next height "),i("em",[t._v("h' != h")])]),t._v(" "),i("li",[t._v("do cross-checking for height "),i("em",[t._v("h")]),t._v(". If we find an attack, we remove\n"),i("em",[t._v("h")]),t._v(" from the lightstore.")]),t._v(" "),i("li",[t._v("the user might already start to use "),i("em",[t._v("h")])])]),t._v(" "),i("p",[t._v("Thus, this concurrency model changes the semantics of the\nlightstore (not all lightblocks that are read by the user are\ntrusted; they may be removed if\nwe find a problem). Whether this is desirable, and whether the gain in\nperformance is worth it, we keep for future versions/discussion of\nlightclient protocols.")])]),t._v(" "),i("h2",{attrs:{id:"definitions"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#definitions"}},[t._v("#")]),t._v(" Definitions")]),t._v(" "),i("h3",{attrs:{id:"peers"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#peers"}},[t._v("#")]),t._v(" Peers")]),t._v(" "),i("h4",{attrs:{id:"lc-data-peers-1"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#lc-data-peers-1"}},[t._v("#")]),t._v(" "),i("strong",[t._v("[LC-DATA-PEERS.1]:")])]),t._v(" "),i("p",[t._v("A fixed set of full nodes is provided in the configuration upon\ninitialization. Initially this set is partitioned into")]),t._v(" "),i("ul",[i("li",[t._v("one full node that is the "),i("em",[t._v("primary")]),t._v(" (singleton set),")]),t._v(" "),i("li",[t._v("a set "),i("em",[t._v("Secondaries")]),t._v(" (of fixed size, e.g., 3),")]),t._v(" "),i("li",[t._v("a set "),i("em",[t._v("FullNodes")]),t._v(".")]),t._v(" "),i("li",[t._v("A set "),i("em",[t._v("FaultyNodes")]),t._v(" of nodes that the light client suspects of\nbeing faulty; it is initially empty")])]),t._v(" "),i("h4",{attrs:{id:"lc-inv-nodes-1"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#lc-inv-nodes-1"}},[t._v("#")]),t._v(" "),i("strong",[t._v("[LC-INV-NODES.1]:")])]),t._v(" "),i("p",[t._v("The detector shall maintain the following invariants:")]),t._v(" "),i("ul",[i("li",[i("em",[t._v("FullNodes \\intersect Secondaries = {}")])]),t._v(" "),i("li",[i("em",[t._v("FullNodes \\intersect FaultyNodes = {}")])]),t._v(" "),i("li",[i("em",[t._v("Secondaries \\intersect FaultyNodes = {}")])])]),t._v(" "),i("p",[t._v("and the following transition invariant")]),t._v(" "),i("ul",[i("li",[i("em",[t._v("FullNodes' \\union Secondaries' \\union FaultyNodes' = FullNodes\n\\union Secondaries \\union FaultyNodes")])])]),t._v(" "),i("h4",{attrs:{id:"lc-func-replace-primary-1"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#lc-func-replace-primary-1"}},[t._v("#")]),t._v(" "),i("strong",[t._v("[LC-FUNC-REPLACE-PRIMARY.1]:")])]),t._v(" "),i("tm-code-block",{staticClass:"codeblock",attrs:{language:"go",base64:"UmVwbGFjZV9QcmltYXJ5KHJvb3Qtb2YtdHJ1c3QgTGlnaHRCbG9jaykK"}}),t._v(" "),i("ul",[i("li",[t._v("Implementation remark\n"),i("ul",[i("li",[t._v("the primary is replaced by a secondary")]),t._v(" "),i("li",[t._v("to maintain a constant size of secondaries, need to\n"),i("ul",[i("li",[t._v("pick a new secondary "),i("em",[t._v("nsec")]),t._v(" while ensuring [LC-INV-ROOT-AGREED.1]")]),t._v(" "),i("li",[t._v("that is, we need to ensure that root-of-trust = FetchLightBlock(nsec, root-of-trust.Header.Height)")])])])])]),t._v(" "),i("li",[t._v("Expected precondition\n"),i("ul",[i("li",[i("em",[t._v("FullNodes")]),t._v(" is nonempty")])])]),t._v(" "),i("li",[t._v("Expected postcondition\n"),i("ul",[i("li",[i("em",[t._v("primary")]),t._v(" is moved to "),i("em",[t._v("FaultyNodes")])]),t._v(" "),i("li",[t._v("a secondary "),i("em",[t._v("s")]),t._v(" is moved from "),i("em",[t._v("Secondaries")]),t._v(" to primary")])])]),t._v(" "),i("li",[t._v("Error condition\n"),i("ul",[i("li",[t._v("if precondition is violated")])])])]),t._v(" "),i("h4",{attrs:{id:"lc-func-replace-secondary-1"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#lc-func-replace-secondary-1"}},[t._v("#")]),t._v(" "),i("strong",[t._v("[LC-FUNC-REPLACE-SECONDARY.1]:")])]),t._v(" "),i("tm-code-block",{staticClass:"codeblock",attrs:{language:"go",base64:"UmVwbGFjZV9TZWNvbmRhcnkoYWRkciBBZGRyZXNzLCByb290LW9mLXRydXN0IExpZ2h0QmxvY2spCg=="}}),t._v(" "),i("ul",[i("li",[t._v("Implementation remark\n"),i("ul",[i("li",[t._v("maintain [LCD-INV-ROOT-AGREED.1], that is,\nensure root-of-trust = FetchLightBlock(nsec, root-of-trust.Header.Height)")])])]),t._v(" "),i("li",[t._v("Expected precondition\n"),i("ul",[i("li",[i("em",[t._v("FullNodes")]),t._v(" is nonempty")])])]),t._v(" "),i("li",[t._v("Expected postcondition\n"),i("ul",[i("li",[t._v("addr is moved from "),i("em",[t._v("Secondaries")]),t._v(" to "),i("em",[t._v("FaultyNodes")])]),t._v(" "),i("li",[t._v("an address "),i("em",[t._v("nsec")]),t._v(" is moved from "),i("em",[t._v("FullNodes")]),t._v(" to "),i("em",[t._v("Secondaries")])])])]),t._v(" "),i("li",[t._v("Error condition\n"),i("ul",[i("li",[t._v("if precondition is violated")])])])]),t._v(" "),i("h3",{attrs:{id:"data-types"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#data-types"}},[t._v("#")]),t._v(" Data Types")]),t._v(" "),i("p",[t._v("The core data structure of the protocol is the LightBlock.")]),t._v(" "),i("h4",{attrs:{id:"lc-data-lightblock-1"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#lc-data-lightblock-1"}},[t._v("#")]),t._v(" "),i("strong",[t._v("[LC-DATA-LIGHTBLOCK.1]")])]),t._v(" "),i("tm-code-block",{staticClass:"codeblock",attrs:{language:"go",base64:"dHlwZSBMaWdodEJsb2NrIHN0cnVjdCB7CiAgICAgICAgICAgICAgICBIZWFkZXIgICAgICAgICAgSGVhZGVyCiAgICAgICAgICAgICAgICBDb21taXQgICAgICAgICAgQ29tbWl0CiAgICAgICAgICAgICAgICBWYWxpZGF0b3JzICAgICAgVmFsaWRhdG9yU2V0CiAgICAgICAgICAgICAgICBOZXh0VmFsaWRhdG9ycyAgVmFsaWRhdG9yU2V0CiAgICAgICAgICAgICAgICBQcm92aWRlciAgICAgICAgUGVlcklECn0K"}}),t._v(" "),i("h4",{attrs:{id:"lc-data-lightstore-1"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#lc-data-lightstore-1"}},[t._v("#")]),t._v(" "),i("strong",[t._v("[LC-DATA-LIGHTSTORE.1]")])]),t._v(" "),i("p",[t._v("LightBlocks are stored in a structure which stores all LightBlock from\ninitialization or received from peers.")]),t._v(" "),i("tm-code-block",{staticClass:"codeblock",attrs:{language:"go",base64:"dHlwZSBMaWdodFN0b3JlIHN0cnVjdCB7CiAgICAgICAgLi4uCn0KCg=="}}),t._v(" "),i("p",[t._v("We use the functions that the LightStore exposes, which\nare defined in the "),i("a",{attrs:{href:"TODO"}},[t._v("verification specification")]),t._v(".")]),t._v(" "),i("h3",{attrs:{id:"inputs"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#inputs"}},[t._v("#")]),t._v(" Inputs")]),t._v(" "),i("p",[t._v("The lightclient is initialized with LCInitData")]),t._v(" "),i("h4",{attrs:{id:"lc-data-init-1"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#lc-data-init-1"}},[t._v("#")]),t._v(" "),i("strong",[t._v("[LC-DATA-INIT.1]")])]),t._v(" "),i("tm-code-block",{staticClass:"codeblock",attrs:{language:"go",base64:"dHlwZSBMQ0luaXREYXRhIHN0cnVjdCB7CiAgICBsaWdodEJsb2NrICAgICBMaWdodEJsb2NrCiAgICBnZW5lc2lzRG9jICAgICBHZW5lc2lzRG9jCn0K"}}),t._v(" "),i("p",[t._v("where only one of the components must be provided. "),i("code",[t._v("GenesisDoc")]),t._v(" is\ndefined in the "),i("a",{attrs:{href:"https://github.com/tendermint/tendermint/blob/master/types/genesis.go",target:"_blank",rel:"noopener noreferrer"}},[t._v("Tendermint\nTypes"),i("OutboundLink")],1),t._v(".")]),t._v(" "),i("h4",{attrs:{id:"lc-data-genesis-1"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#lc-data-genesis-1"}},[t._v("#")]),t._v(" "),i("strong",[t._v("[LC-DATA-GENESIS.1]")])]),t._v(" "),i("tm-code-block",{staticClass:"codeblock",attrs:{language:"go",base64:"dHlwZSBHZW5lc2lzRG9jIHN0cnVjdCB7CiAgICBHZW5lc2lzVGltZSAgICAgdGltZS5UaW1lICAgICAgICAgICAgICAgIGBqc29uOiZxdW90O2dlbmVzaXNfdGltZSZxdW90O2AKICAgIENoYWluSUQgICAgICAgICBzdHJpbmcgICAgICAgICAgICAgICAgICAgYGpzb246JnF1b3Q7Y2hhaW5faWQmcXVvdDtgCiAgICBJbml0aWFsSGVpZ2h0ICAgaW50NjQgICAgICAgICAgICAgICAgICAgIGBqc29uOiZxdW90O2luaXRpYWxfaGVpZ2h0JnF1b3Q7YAogICAgQ29uc2Vuc3VzUGFyYW1zICp0bXByb3RvLkNvbnNlbnN1c1BhcmFtcyBganNvbjomcXVvdDtjb25zZW5zdXNfcGFyYW1zLG9taXRlbXB0eSZxdW90O2AKICAgIFZhbGlkYXRvcnMgICAgICBbXUdlbmVzaXNWYWxpZGF0b3IgICAgICAgYGpzb246JnF1b3Q7dmFsaWRhdG9ycyxvbWl0ZW1wdHkmcXVvdDtgCiAgICBBcHBIYXNoICAgICAgICAgdG1ieXRlcy5IZXhCeXRlcyAgICAgICAgIGBqc29uOiZxdW90O2FwcF9oYXNoJnF1b3Q7YAogICAgQXBwU3RhdGUgICAgICAgIGpzb24uUmF3TWVzc2FnZSAgICAgICAgICBganNvbjomcXVvdDthcHBfc3RhdGUsb21pdGVtcHR5JnF1b3Q7YAp9Cg=="}}),t._v(" "),i("p",[t._v("We use the following function\n"),i("code",[t._v("makeblock")]),t._v(" so that we create a lightblock from the genesis\nfile in order to do verification based on the data from the genesis\nfile using the same verification function we use in normal operation.")]),t._v(" "),i("h4",{attrs:{id:"lc-func-makeblock-1"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#lc-func-makeblock-1"}},[t._v("#")]),t._v(" "),i("strong",[t._v("[LC-FUNC-MAKEBLOCK.1]")])]),t._v(" "),i("tm-code-block",{staticClass:"codeblock",attrs:{language:"go",base64:"ZnVuYyBtYWtlYmxvY2sgKGdlbmVzaXNEb2MgR2VuZXNpc0RvYykgKGxpZ2h0QmxvY2sgTGlnaHRCbG9jaykpCg=="}}),t._v(" "),i("ul",[i("li",[t._v("Implementation remark\n"),i("ul",[i("li",[t._v("none")])])]),t._v(" "),i("li",[t._v("Expected precondition\n"),i("ul",[i("li",[t._v("none")])])]),t._v(" "),i("li",[t._v("Expected postcondition\n"),i("ul",[i("li",[t._v("lightBlock.Header.Height =  genesisDoc.InitialHeight")]),t._v(" "),i("li",[t._v("lightBlock.Header.Time = genesisDoc.GenesisTime")]),t._v(" "),i("li",[t._v("lightBlock.Header.LastBlockID = nil")]),t._v(" "),i("li",[t._v("lightBlock.Header.LastCommit = nil")]),t._v(" "),i("li",[t._v("lightBlock.Header.Validators = genesisDoc.Validators")]),t._v(" "),i("li",[t._v("lightBlock.Header.NextValidators = genesisDoc.Validators")]),t._v(" "),i("li",[t._v("lightBlock.Header.Data = nil")]),t._v(" "),i("li",[t._v("lightBlock.Header.AppState =  genesisDoc.AppState")]),t._v(" "),i("li",[t._v("lightBlock.Header.LastResult = nil")]),t._v(" "),i("li",[t._v("lightBlock.Commit = nil")]),t._v(" "),i("li",[t._v("lightBlock.Validators = genesisDoc.Validators")]),t._v(" "),i("li",[t._v("lightBlock.NextValidators = genesisDoc.Validators")]),t._v(" "),i("li",[t._v("lightBlock.Provider = nil")])])]),t._v(" "),i("li",[t._v("Error condition\n"),i("ul",[i("li",[t._v("none")])])])]),t._v(" "),i("hr"),t._v(" "),i("h3",{attrs:{id:"configuration-parameters"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#configuration-parameters"}},[t._v("#")]),t._v(" Configuration Parameters")]),t._v(" "),i("h4",{attrs:{id:"lc-inv-root-agreed-1"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#lc-inv-root-agreed-1"}},[t._v("#")]),t._v(" "),i("strong",[t._v("[LC-INV-ROOT-AGREED.1]")])]),t._v(" "),i("p",[t._v("In the Sequential-Supervisor, it is always the case that the primary\nand all secondaries agree on lightStore.Latest().")]),t._v(" "),i("h3",{attrs:{id:"assumptions"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#assumptions"}},[t._v("#")]),t._v(" Assumptions")]),t._v(" "),i("p",[t._v("We have to assume that the initialization data (the lightblock or the\ngenesis file) are consistent with the blockchain. This is subjective\ninitialization and it cannot be checked locally.")]),t._v(" "),i("h3",{attrs:{id:"invariants"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#invariants"}},[t._v("#")]),t._v(" Invariants")]),t._v(" "),i("h4",{attrs:{id:"lc-inv-peerlist-1"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#lc-inv-peerlist-1"}},[t._v("#")]),t._v(" "),i("strong",[t._v("[LC-INV-PEERLIST.1]:")])]),t._v(" "),i("p",[t._v("The peer list contains a primary and a secondary.")]),t._v(" "),i("blockquote",[i("p",[t._v("If the invariant is violated, the light client does not have enough\npeers to download headers from. As a result, the light client\nneeds to terminate in case this invariant is violated.")])]),t._v(" "),i("h2",{attrs:{id:"supervisor"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#supervisor"}},[t._v("#")]),t._v(" Supervisor")]),t._v(" "),i("h3",{attrs:{id:"outline"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#outline"}},[t._v("#")]),t._v(" Outline")]),t._v(" "),i("p",[t._v("The supervisor implements the functionality of the lightclient. It is\ninitialized with a genesis file or with a lightblock the user\ntrusts. This initialization is subjective, that is, the security of\nthe lightclient is based on the validity of the input. If the genesis\nfile or the lightblock deviate from the actual ones on the blockchain,\nthe lightclient provides no guarantees.")]),t._v(" "),i("p",[t._v("After initialization, the supervisor awaits an input, that is, the\nheight of the next lightblock that should be obtained. Then it\ndownloads, verifies, and cross-checks a lightblock, and if all tests\ngo through, the light block (and possibly other lightblocks) are added\nto the lightstore, which is returned in an output event to the user.")]),t._v(" "),i("p",[t._v("The following main loop does the interaction with the user (input,\noutput) and calls the following two functions:")]),t._v(" "),i("ul",[i("li",[i("code",[t._v("InitLightClient")]),t._v(": it initializes the lightstore either with the\nprovided lightblock or with the lightblock that corresponds to the\nfirst block generated by the blockchain (by the validators defined\nby the genesis file)")]),t._v(" "),i("li",[i("code",[t._v("VerifyAndDetect")]),t._v(": takes as input a lightstore and a height and\nreturns the updated lightstore.")])]),t._v(" "),i("h4",{attrs:{id:"lc-func-supervisor-1"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#lc-func-supervisor-1"}},[t._v("#")]),t._v(" "),i("strong",[t._v("[LC-FUNC-SUPERVISOR.1]:")])]),t._v(" "),i("tm-code-block",{staticClass:"codeblock",attrs:{language:"go",base64:"ZnVuYyBTZXF1ZW50aWFsLVN1cGVydmlzb3IgKGluaXRkYXRhIExDSW5pdERhdGEpIChFcnJvcikgewoKICAgIGxpZ2h0U3RvcmUscmVzdWx0IDo9IEluaXRMaWdodENsaWVudChpbml0RGF0YSk7CiAgICBpZiByZXN1bHQgIT0gT0sgewogICAgICAgIHJldHVybiByZXN1bHQ7CiAgICB9CgogICAgbG9vcCB7CiAgICAgICAgLy8gZ2V0IHRoZSBuZXh0IGhlaWdodAogICAgICAgIG5leHRIZWlnaHQgOj0gaW5wdXQoKTsKICAKICAgICAgICBsaWdodFN0b3JlLHJlc3VsdCA6PSBWZXJpZnlBbmREZXRlY3QobGlnaHRTdG9yZSwgbmV4dEhlaWdodCk7CiAgCiAgICAgICAgaWYgcmVzdWx0ID09IE9LIHsKICAgICAgICAgICAgb3V0cHV0KExpZ2h0U3RvcmUuR2V0KHRhcmdldEhlaWdodCkpOwogICAvLyB3ZSBvbmx5IG91dHB1dCBhIHRydXN0ZWQgbGlnaHRibG9jawogICAgICAgIH0KICAgICAgICBlbHNlIHsKICAgICAgICAgICAgcmV0dXJuIHJlc3VsdAogICAgICAgIH0KICAgICAgICAvLyBRVUVTVElPTjogaXMgaXQgT0sgdG8gZ2VuZXJhdGUgb3V0cHV0IGV2ZW50IGluIG5vcm1hbCBjYXNlLAogICAgICAgIC8vIGFuZCB0ZXJtaW5hdGUgd2l0aCBmYWlsdXJlIGluIHRoZSAobGlnaHQgY2xpZW50KSBhdHRhY2sgY2FzZT8KICAgIH0KfQo="}}),t._v(" "),i("ul",[i("li",[t._v("Implementation remark\n"),i("ul",[i("li",[t._v("infinite loop unless a light client attack is detected")]),t._v(" "),i("li",[t._v("In typical implementations (e.g., the one in Rust),\nthere are mutliple input actions:\n"),i("code",[t._v("VerifytoLatest")]),t._v(", "),i("code",[t._v("LatestTrusted")]),t._v(", and "),i("code",[t._v("GetStatus")]),t._v(". The\ninformation can be easily obtained from the lightstore, so that\nwe do not treat these requests explicitly here but just consider\nthe request for a block of a given height which requires more\ninvolved computation and communication.")])])]),t._v(" "),i("li",[t._v("Expected precondition\n"),i("ul",[i("li",[i("em",[t._v("LCInitData")]),t._v(" contains a genesis file or a lightblock.")])])]),t._v(" "),i("li",[t._v("Expected postcondition\n"),i("ul",[i("li",[t._v("if a light client attack is detected: it stops and submits\nevidence (in "),i("code",[t._v("InitLightClient")]),t._v(" or "),i("code",[t._v("VerifyAndDetect")]),t._v(")")]),t._v(" "),i("li",[t._v("otherwise: non. It runs forever.")])])]),t._v(" "),i("li",[t._v("Invariant: "),i("em",[t._v("lightStore")]),t._v(" contains trusted lightblocks only.")]),t._v(" "),i("li",[t._v("Error condition\n"),i("ul",[i("li",[t._v("if "),i("code",[t._v("InitLightClient")]),t._v(" or "),i("code",[t._v("VerifyAndDetect")]),t._v(" fails (if a attack is\ndetected, or if [LCV-INV-TP.1] is violated)")])])])]),t._v(" "),i("hr"),t._v(" "),i("h3",{attrs:{id:"details-of-the-functions"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#details-of-the-functions"}},[t._v("#")]),t._v(" Details of the Functions")]),t._v(" "),i("h4",{attrs:{id:"initialization"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#initialization"}},[t._v("#")]),t._v(" Initialization")]),t._v(" "),i("p",[t._v("The light client is based on subjective initialization. It has to\ntrust the initial data given to it by the user. It cannot do any\ndetection of attack. So either upon initialization we obtain a\nlightblock and just initialize the lightstore with it. Or in case of a\ngenesis file, we download, verify, and cross-check the first block, to\ninitialize the lightstore with this first block. The reason is that\nwe want to maintain [LCV-INV-TP.1] from the beginning.")]),t._v(" "),i("blockquote",[i("p",[t._v("If the lightclient is initialized with a lightblock, one might think\nit may increase trust, when one cross-checks the initial light\nblock. However, if a peer provides a conflicting\nlightblock, the question is to distinguish the case of a\n"),i("a",{attrs:{href:"https://informal.systems",target:"_blank",rel:"noopener noreferrer"}},[t._v("bogus"),i("OutboundLink")],1),t._v(" block (upon which operation should proceed) from a\n"),i("a",{attrs:{href:"https://informal.systems",target:"_blank",rel:"noopener noreferrer"}},[t._v("light client attack"),i("OutboundLink")],1),t._v(" (upon which operation should stop). In\ncase of a bogus block, the lightclient might be forced to do\nbackwards verification until the blocks are out of the trusting\nperiod, to make sure no previous validator set could have generated\nthe bogus block, which effectively opens up a DoS attack on the lightclient\nwithout adding effective robustness.")])]),t._v(" "),i("h4",{attrs:{id:"lc-func-init-1"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#lc-func-init-1"}},[t._v("#")]),t._v(" "),i("strong",[t._v("[LC-FUNC-INIT.1]:")])]),t._v(" "),i("tm-code-block",{staticClass:"codeblock",attrs:{language:"go",base64:"ZnVuYyBJbml0TGlnaHRDbGllbnQgKGluaXREYXRhIExDSW5pdERhdGEpIChMaWdodFN0b3JlLCBFcnJvcikgewoKICAgIGlmIExDSW5pdERhdGEuTGlnaHRCbG9jayAhPSBuaWwgewogICAgICAgIC8vIHdlIHRydXN0IHRoZSBwcm92aWRlZCBpbml0aWFsIGJsb2NrLgogICAgICAgIG5ld2Jsb2NrIDo9IExDSW5pdERhdGEuTGlnaHRCbG9jawogICAgfQogICAgZWxzZSB7CiAgICAgICAgZ2VuZXNpc0Jsb2NrIDo9IG1ha2VibG9jayhpbml0RGF0YS5nZW5lc2lzRG9jKTsKCiAgICAgICAgcmVzdWx0IDo9IE5vUmVzdWx0OwogICAgICAgIHdoaWxlIHJlc3VsdCAhPSBSZXN1bHRTdWNjZXNzIHsKICAgICAgICAgICAgY3VycmVudCA9IEZldGNoTGlnaHRCbG9jayhQZWVyTGlzdC5wcmltYXJ5KCksIGdlbmVzaXNCbG9jay5IZWFkZXIuSGVpZ2h0ICsgMSkKICAgICAgICAgICAgLy8gUVVFU1RJT046IGlzIHRoZSBoZWlnaHQgd2l0aCAmcXVvdDsrMSZxdW90OyBPSz8KCiAgICAgICAgICAgIGlmIENBTk5PVF9WRVJJRlkgPSBWYWxpZEFuZFZlcmlmeShnZW5lc2lzQmxvY2ssIGN1cnJlbnQpIHsKICAgICAgICAgICAgICAgIFJlcGxhY2VfUHJpbWFyeSgpOwogICAgICAgICAgICB9CiAgICAgICAgICAgIGVsc2UgewogICAgICAgICAgICAgICAgcmVzdWx0ID0gUmVzdWx0U3VjY2VzcwogICAgICAgICAgICB9CiAgICAgICAgfQogIAogICAgICAgIC8vIGNyb3NzLWNoZWNrCiAgYXV4TFMgOj0gbmV3IExpZ2h0U3RvcmUKICBhdXhMUy5BZGQoY3VycmVudCkKICAgICAgICBFdmlkZW5jZXMgOj0gQXR0YWNrRGV0ZWN0b3IoZ2VuZXNpc0Jsb2NrLCBhdXhMUykKICAgICAgICBpZiBFdmlkZW5jZXMuRW1wdHkgewogICAgICAgICAgICBuZXdCbG9jayA6PSBjdXJyZW50CiAgICAgICAgfQogICAgICAgIGVsc2UgewogICAgICAgICAgICAvLyBbTEMtU1VNQklULUVWSURFTkNFLjFdCiAgICAgICAgICAgIHN1Ym1pdEV2aWRlbmNlKEV2aWRlbmNlcyk7CiAgICAgICAgICAgIHJldHVybihuaWwsIEVycm9yQXR0YWNrKTsKICAgICAgICB9CiAgICB9CgogICAgbGlnaHRTdG9yZSA6PSBuZXcgTGlnaHRTdG9yZTsKICAgIGxpZ2h0U3RvcmUuQWRkKG5ld0Jsb2NrKTsKICAgIHJldHVybiAobGlnaHRTdG9yZSwgT0spOwp9Cgo="}}),t._v(" "),i("ul",[i("li",[t._v("Implementation remark\n"),i("ul",[i("li",[t._v("none")])])]),t._v(" "),i("li",[t._v("Expected precondition\n"),i("ul",[i("li",[i("em",[t._v("LCInitData")]),t._v(" contains either a genesis file of a lightblock")]),t._v(" "),i("li",[t._v("if genesis it passes "),i("code",[t._v("ValidateAndComplete()")]),t._v(" see "),i("a",{attrs:{href:"https://informal.systems",target:"_blank",rel:"noopener noreferrer"}},[t._v("Tendermint"),i("OutboundLink")],1)])])]),t._v(" "),i("li",[t._v("Expected postcondition\n"),i("ul",[i("li",[i("em",[t._v("lightStore")]),t._v(" initialized with trusted lightblock. It has either been\ncross-checked (from genesis) or it has initial trust from the\nuser.")])])]),t._v(" "),i("li",[t._v("Error condition\n"),i("ul",[i("li",[t._v("if precondition is violated")]),t._v(" "),i("li",[t._v("empty peerList")])])])]),t._v(" "),i("hr"),t._v(" "),i("h4",{attrs:{id:"main-verification-and-detection-logic"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#main-verification-and-detection-logic"}},[t._v("#")]),t._v(" Main verification and detection logic")]),t._v(" "),i("h4",{attrs:{id:"lc-func-main-verif-detect-1"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#lc-func-main-verif-detect-1"}},[t._v("#")]),t._v(" "),i("strong",[t._v("[LC-FUNC-MAIN-VERIF-DETECT.1]:")])]),t._v(" "),i("tm-code-block",{staticClass:"codeblock",attrs:{language:"go",base64:"ZnVuYyBWZXJpZnlBbmREZXRlY3QgKGxpZ2h0U3RvcmUgTGlnaHRTdG9yZSwgdGFyZ2V0SGVpZ2h0IEhlaWdodCkKICAgICAgICAgICAgICAgICAgICAgKExpZ2h0U3RvcmUsIFJlc3VsdCkgewoKICAgIGIxLCByMSA9IGxpZ2h0U3RvcmUuR2V0KHRhcmdldEhlaWdodCkKICAgIGlmIHIxID09IHRydWUgewogICAgICAgIGlmIGIxLlN0YXRlID09IFN0YXRlVHJ1c3RlZCB7CiAgICAgICAgICAgIC8vIGJsb2NrIGFscmVhZHkgdGhlcmUgYW5kIHRydXN0ZWQKICAgICAgICAgICAgcmV0dXJuIChsaWdodFN0b3JlLCBSZXN1bHRTdWNjZXNzKQogIH0KICBlbHNlIHsKICAgICAgICAgICAgLy8gV2UgaGF2ZSBhIGxpZ2h0YmxvY2sgaW4gdGhlIHN0b3JlLCBidXQgaXQgaGFzIG5vdCBiZWVuIAogICAgICAgICAgICAvLyBjcm9zcy1jaGVja2VkIGJ5IG5vdy4gV2UgZG8gdGhhdCBub3cuCiAgICAgICAgICAgIHJvb3Rfb2ZfdHJ1c3QsIGF1eExTIDo9IGxpZ2h0c3RvcmUuVHJhY2VUbyhiMSk7CiAgIAogICAgICAgICAgICAvLyBDcm9zcy1jaGVjawogICAgICAgICAgICBFdmlkZW5jZXMgOj0gQXR0YWNrRGV0ZWN0b3Iocm9vdF9vZl90cnVzdCwgYXV4TFMpOwogICAgICAgICAgICBpZiBFdmlkZW5jZXMuRW1wdHkgewogICAgICAgICAgICAgICAgLy8gbm8gYXR0YWNrIGRldGVjdGVkLCB3ZSB0cnVzdCB0aGUgbmV3IGxpZ2h0YmxvY2sKICAgICAgICAgICAgICAgIGxpZ2h0U3RvcmUuVXBkYXRlKGF1eExTLkxhdGVzdCgpLCAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFN0YXRlVHJ1c3RlZCwgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2ZXJmaWVkTFMuTGF0ZXN0KCkudmVyaWZpY2F0aW9uLXJvb3QpOwogICAgICAgICAgICAgICAgcmV0dXJuIChsaWdodFN0b3JlLCBPSyk7CiAgICAgICAgICAgIH0KICAgICAgICAgICAgZWxzZSB7CiAgICAgICAgICAgICAgICAvLyB0aGVyZSBpcyBhbiBhdHRhY2ssIHdlIGV4aXQKICBzdWJtaXRFdmlkZW5jZShFdmlkZW5jZXMpOwogICAgICAgICAgICAgICAgcmV0dXJuKGxpZ2h0U3RvcmUsIEVycm9yQXR0YWNrKTsKICAgICAgICAgICAgfQogICAgICAgIH0KICAgIH0KCiAgICAvLyBnZXQgdGhlIGxpZ2h0YmxvY2sgd2l0aCBtYXhpbXVtIGhlaWdodCBzbWFsbGVyIHRoYW4gdGFyZ2V0SGVpZ2h0CiAgICAvLyB3b3VsZCB0eXBpY2FsbHkgYmUgdGhlIGhlaWdoZXN0LCBpZiB3ZSBhbHdheXMgbW92ZSBmb3J3YXJkCiAgICByb290X29mX3RydXN0LCByMiA9IGxpZ2h0U3RvcmUuTGF0ZXN0UHJldmlvdXModGFyZ2V0SGVpZ2h0KTsKCiAgICBpZiByMiA9IGZhbHNlIHsKICAgICAgICAvLyB0aGVyZSBpcyBubyBsaWdodGJsb2NrIGZyb20gd2hpY2ggd2UgY2FuIGRvIGZvcndhcmQKICAgICAgICAvLyAoc2tpcHBpbmcpIHZlcmlmaWNhdGlvbi4gVGh1cyB3ZSBoYXZlIHRvIGdvIGJhY2t3YXJkcy4KICAgICAgICAvLyBObyBjcm9zcy1jaGVjayBuZWVkZWQuIFdlIHRydXN0IGhhc2hlcy4gVGhlcmVmb3JlLCB3ZQogICAgICAgIC8vIGRpcmVjdGx5IHJldHVybiB0aGUgcmVzdWx0CiAgICAgICAgcmV0dXJuIEJhY2t3YXJkcyhwcmltYXJ5LCBsaWdodFN0b3JlLkxvd2VzdCgpLCB0YXJnZXRIZWlnaHQpCiAgICB9CiAgICBlbHNlIHsKICAgICAgICAvLyBGb3J3YXJkIHZlcmlmaWNhdGlvbiArIGRldGVjdGlvbgogICAgICAgIHJlc3VsdCA6PSBOb1Jlc3VsdDsKICAgICAgICB3aGlsZSByZXN1bHQgIT0gUmVzdWx0U3VjY2VzcyB7CiAgICAgICAgICAgIHZlcmlmaWVkTFMscmVzdWx0IDo9IFZlcmlmeVRvVGFyZ2V0KHByaW1hcnksCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJvb3Rfb2ZfdHJ1c3QsCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5leHRIZWlnaHQpOwogICAgICAgICAgICBpZiByZXN1bHQgPT0gUmVzdWx0RmFpbHVyZSB7CiAgICAgICAgICAgICAgICAvLyBwaWNrIG5ldyBwcmltYXJ5IChwcm9tb3RlIGEgc2Vjb25kYXJ5IHRvIHByaW1hcnkpCiAgICAgICAgICAgICAgICBSZXBsYWNlX1ByaW1hcnkocm9vdF9vZl90cnVzdCk7CiAgICAgICAgICAgIH0KICAgICAgICAgICAgZWxzZSBpZiByZXN1bHQgPT0gUmVzdWx0RXhwaXJlZCB7CiAgICAgICAgICAgICAgICByZXR1cm4gKGxpZ2h0U3RvcmUsIHJlc3VsdCkKICAgICAgICAgICAgfQogICAgICAgIH0KCiAgICAgICAgLy8gQ3Jvc3MtY2hlY2sKICAgICAgICBFdmlkZW5jZXMgOj0gQXR0YWNrRGV0ZWN0b3Iocm9vdF9vZl90cnVzdCwgdmVyaWZpZWRMUyk7CiAgICAgICAgaWYgRXZpZGVuY2VzLkVtcHR5IHsKICAgICAgICAgICAgLy8gbm8gYXR0YWNrIGRldGVjdGVkLCB3ZSB0cnVzdCB0aGUgbmV3IGxpZ2h0YmxvY2sKICAgICAgICAgICAgdmVyaWZpZWRMUy5VcGRhdGUodmVyZmllZExTLkxhdGVzdCgpLCAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgU3RhdGVUcnVzdGVkLCAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmVyZmllZExTLkxhdGVzdCgpLnZlcmlmaWNhdGlvbi1yb290KTsKICAgICAgICAgICAgbGlnaHRTdG9yZS5zdG9yZV9jaGFpbih2ZXJpZmlkTFMpOwogICAgICAgICAgICByZXR1cm4gKGxpZ2h0U3RvcmUsIE9LKTsKICAgICAgICB9CiAgICAgICAgZWxzZSB7CiAgICAgICAgICAgIC8vIHRoZXJlIGlzIGFuIGF0dGFjaywgd2UgZXhpdAogICAgICAgICAgICByZXR1cm4obGlnaHRTdG9yZSwgRXJyb3JBdHRhY2spOwogICAgICAgIH0KICAgIH0KfQo="}}),t._v(" "),i("ul",[i("li",[t._v("Implementation remark\n"),i("ul",[i("li",[t._v("none")])])]),t._v(" "),i("li",[t._v("Expected precondition\n"),i("ul",[i("li",[t._v("none")])])]),t._v(" "),i("li",[t._v("Expected postcondition\n"),i("ul",[i("li",[t._v("lightblock of height "),i("em",[t._v("targetHeight")]),t._v(" (and possibly additional blocks) added to "),i("em",[t._v("lightStore")])])])]),t._v(" "),i("li",[t._v("Error condition\n"),i("ul",[i("li",[t._v("an attack is detected")]),t._v(" "),i("li",[t._v("[LC-DATA-PEERLIST-INV.1] is violated")])])])]),t._v(" "),i("hr")],1)}),[],!1,null,null,null);e.default=n.exports}}]);