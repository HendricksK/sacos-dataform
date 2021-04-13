import { Octokit } from "https://cdn.skypack.dev/@octokit/rest";

let octokit = null

init(upload)

function init(callback) {

	let apiurl = window.localStorage.getItem('apiurl')

    let xhr = new XMLHttpRequest()
    let url = apiurl + '/auth/GHUB_SACOS_TOKEN'

    xhr.open("GET", url)
    xhr.setRequestHeader('Accept', 'application/json; charset=UTF-8')
    xhr.send()

    xhr.onreadystatechange = (e) => {
    	if (xhr.readyState === 4) {
            const token = JSON.parse(xhr.responseText)

            // https://www.devglan.com/online-tools/bcrypt-hash-generator

            octokit = new Octokit({
			  auth: token.token
			});
            //Wait until data is done being retrieved then run callback
            callback(octokit)
        }
    }	
}

function upload(octokit) {

	const repocontents = octokit.request('GET /repos/{owner}/{repo}/contents/{path}', {
	  owner: 'HendricksK',
	  repo: 'sacos_images',
	  path: 'uploads/dataform'
	})

	// Getting 404 error here because of auth.
	try {
		// https://octokit.github.io/rest.js/v18#repos-create-or-update-file-contents
		upload = octokit.rest.repos.createOrUpdateFileContents({
	        owner: 'HendricksK',
			repo: 'sacos_images',
			path: 'uploads/dataform/SSBidXkgbXkgd2VlZCBpbiBjYWxpZm9ybmlh_3.txt',
			message: 'this is a commit message',
			content: 'SSBidXkgbXkgd2VlZCBpbiBjYWxpZm9ybmlh',
			sha: ''
	      })

		console.log(upload)

	} catch (e) {
		console.log(e)
	}
}	

