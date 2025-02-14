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
import support from "../support/entidad";
// END EXTRA CODE

/**
 * Create a Link Secret, optionally indicating its ID and if it will be the default one
 * 
 * If there is no default Link Secret, this will be set as default (even if setAsDefault is true).
 * 
 * 
 * public async createLinkSecret(options?: AnonCredsCreateLinkSecretOptions)
 * 
 * export interface AnonCredsCreateLinkSecretOptions {
 *   linkSecretId?: string
 *   setAsDefault?: boolean
 * }
 * @param {string} agent_key
 * @param {string} linkSecretId - optional
 * @param {boolean} setAsDefault
 * @returns {Promise.<void>}
 */
export async function jsa_aries_agent_modules_anoncreds_createLinkSecret(agent_key, linkSecretId, setAsDefault) {
	// BEGIN USER CODE
	try{
		if(agent_key==null)return Promise.reject("Invalid agent_key parameter");							//mandatory
		let agent=support.cache.get(agent_key);
		if(agent==null)return Promise.reject("Agent not found in cache");
		let options={};
		if(linkSecretId!=null)options.linkSecretId=linkSecretId;
		options.setAsDefault=setAsDefault;
		await agent.modules.anoncreds.createLinkSecret(options);
		return Promise.resolve(await agent.modules.anoncreds.getLinkSecretIds());
	}catch(e){
		return Promise.reject(e.toString());
	}
	// END USER CODE
}
