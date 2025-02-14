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
 * sendMessage(outboundPackage: AriesCore.OutboundPackage): Promise<void>
 * @param {string} agent_key
 * @param {string} index
 * @param {string} outboundPackage - json?
 * @returns {Promise.<void>}
 */
export async function jsa_aries_agent_outboundTransports_sendMessage(agent_key, index, outboundPackage) {
	// BEGIN USER CODE
	try{
		if(agent_key==null)return Promise.reject("Invalid agent_key parameter");										//mandatory
		if(index==null)return Promise.reject("Invalid index parameter");										//mandatory
		if(outboundPackage==null)return Promise.reject("Invalid outboundPackage parameter");										//mandatory
		try{
			outboundPackage=JSON.parse(outboundPackage);
		}catch(e){
			return Promise.reject("Argument outboundPackage is not a valid JSON object");
		}
		let agent=support.cache.get(agent_key);
		if(agent==null)return Promise.reject("Agent not found in cache");
		await agent.outboundTransports[index].sendMessage(outboundPackage);
		return Promise.resolve();
	}catch(e){
		return Promise.reject(e.toString());
	}
	// END USER CODE
}
