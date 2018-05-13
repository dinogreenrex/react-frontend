import React,{Component} from 'react'
import axios from 'axios'

class API {
	constructor({url}){
		this.url = url;
		this.endpoints = {}
	}

	http(model,params = null){

	}

	/**
	 * Create and store a single entity object
	 * @param {a entity object } object
	 */
	createEntity(entity){
		this.endpoints[entity.name] = this.createCrudEndpoints(entity);
	}

	createEntities(arrayOfEntities) {
		arrayOfEntities.forEach(this.createEntity.bind(this))
	}

	/**
	 * Create basic endpoint handlers for CRUD operations
	 */
	createCrudEndpoints( {name} ) {
		var endpoints = {}
		const resourceURL = `${this.url}/${name}`
		endpoints.getAll = ( {query}  = {}) => axios.get(
			resourceURL,
			{params: {query} });
		endpoints.getOne = ( { id } ) => axios.get(
			`${resourceURL}/${id}`);
		endpoints.create = (toCreate) => axios.post(
			resourceURL, toCreate);
		endpoints.update = (toUpdate) => axios.put(
			`${resourceURL}/${toUpdate.id}`, toUpdate);
		endpoints.delete = ( {id} ) => axios.delete(
			`${resourceURL}/${id}`)
		return endpoints;
	}
}

export default API;

