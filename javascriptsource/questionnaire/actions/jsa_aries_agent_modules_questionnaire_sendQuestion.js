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
import support from"../../../javascriptsource/aries_sdk/support/entidad";
// END EXTRA CODE

/**
 * @param {string} agent_key
 * @param {string} connectionId
 * @param {string} config - json
 * @returns {Promise.<string>}
 */
export async function jsa_aries_agent_modules_questionnaire_sendQuestion(agent_key, connectionId, config) {
	// BEGIN USER CODE
	try{
		if(agent_key==null)return Promise.reject("Invalid agent_key parameter");
		if(connectionId==null)return Promise.reject("Invalid connectionId parameter");
		if(config==null)return Promise.reject("Invalid config parameter");
		try{
			config=JSON.parse(config);
		}catch(e){
			return Promise.reject("Invalid config parameter: failed to parse")
		}
		let agent=support.cache.get(agent_key);
		if(agent==null)return Promise.reject("Agent not found in cache");
		return Promise.resolve(JSON.stringify(
			await agent.modules.questionnaire.sendQuestion(connectionId,config)
		));
	}catch(e){
		return Promise.reject(e.toString());
	}
	// END USER CODE
}
