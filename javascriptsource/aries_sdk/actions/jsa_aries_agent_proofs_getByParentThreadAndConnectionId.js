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
import support from"../support/entidad";
// END EXTRA CODE

/**
 * getByParentThreadAndConnectionId(parentThreadId: string, connectionId?: string): Promise<AriesCore.ProofExchangeRecord[]>
 * The parent thread id
 * 
 * 
 * Retrieve proof records by connection id and parent thread id
 * 
 * @returns — List containing all proof records matching the given query
 * @param {string} agent_key
 * @param {string} parentThreadId
 * @param {string} connectionId - optional
 * @returns {Promise.<string>}
 */
export async function jsa_aries_agent_proofs_getByParentThreadAndConnectionId(agent_key, parentThreadId, connectionId) {
	// BEGIN USER CODE
	try{
		if(agent_key==null)return Promise.reject("Invalid agent_key parameter");				//mandatory
		if(parentThreadId==null)return Promise.reject("Invalid parentThreadId parameter");		//mandatory
		if(connectionId==null);																	//mandatory
		let agent=support.cache.get(agent_key);
		if(agent==null)return Promise.reject("Agent not found in cache");
		let ret=null;
		      if(connectionId==null){
			ret=await agent.proofs.getByParentThreadAndConnectionId(parentThreadId);
		}else if(connectionId!=null){
			ret=await agent.proofs.getByParentThreadAndConnectionId(parentThreadId,connectionId);
		}
		return Promise.resolve(JSON.stringify(ret));
	}catch(e){
		return Promise.reject(e.toString());
	}
	// END USER CODE
}
