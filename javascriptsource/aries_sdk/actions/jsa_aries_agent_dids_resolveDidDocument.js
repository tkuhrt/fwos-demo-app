// This file was generated by Mendix Studio Pro.
//
// WARNING: Only the following code will be retained when actions are regenerated:
// - the import list
// - the code between BEGIN USER CODE and END USER CODE
// - the code between BEGIN EXTRA CODE and END EXTRA CODE
// Other code you write will be lost the next time you deploy the project.
import "mx-global";
import { Big } from "big.js";

// BEGIN EXTRA CODE
// END EXTRA CODE

/**
 * resolveDidDocument(didUrl: string): Promise<AriesCore.DidDocument>
 * Resolve a did to a did document. This won't return the associated metadata as defined in the did resolution specification, and will throw an error if the did document could not be resolved.
 * 
 * https://github.com/hyperledger/aries-framework-javascript/blob/main/packages/core/src/modules/dids/DidsApi.ts
 * @param {string} agent_key
 * @param {string} didUrl
 * @returns {Promise.<string>}
 */
export async function jsa_aries_agent_dids_resolveDidDocument(agent_key, didUrl) {
	// BEGIN USER CODE
	try{
		if(agent_key==null)return Promise.reject("Invalid agent_key parameter");										//mandatory
		if(didUrl==null)return Promise.reject("Invalid didUrl parameter");										//mandatory
		let agent=support.cache.get(agent_key);
		if(agent==null)return Promise.reject("Agent not found in cache");
		return Promise.resolve(JSON.stringify(await agent.dids.resolveDidDocument(didUrl)));
	}catch(e){
		return Promise.reject(e.toString());
	}
	// END USER CODE
}
