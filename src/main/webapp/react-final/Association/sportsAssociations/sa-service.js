const SA_URL = "http://localhost:8080/api/sportsAssociations"

export const createSA = (sa) =>
    fetch(SA_URL, {
        method: 'POST',
        body: JSON.stringify(sa),
        headers: {'content-type': 'application/json'}
    })
    .then(response => response.json())

export const findAllSAs = () =>
    fetch(SA_URL)
        .then(response => response.json())

export const findSAById = (id) =>
    fetch(`${SA_URL}/${id}`)
        .then(response => response.json())

export const updateSA = (id, sa) =>
    fetch(`${SA_URL}/${id}`, {
        method: 'PUT',
        body: JSON.stringify(sa),
        headers: {'content-type': 'application/json'}
    })
    .then(response => response.json())

const deleteSA = (id) =>
    fetch(`${SA_URL}/${id}`, {
        method: "DELETE"
    })

export default {
    createSA,
    findAllSAs,
    findSAById,
    updateSA,
    deleteSA
}