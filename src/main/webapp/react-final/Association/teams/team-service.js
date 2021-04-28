const SA_URL = "http://localhost:8080/api/sportsAssociations"
const TEAM_URL = "http://localhost:8080/api/teams"

export const createTeamForSA = (saId, team) =>
    fetch(`${SA_URL}/${saId}/teams`, {
        method: 'POST',
        body: JSON.stringify(team),
        headers: {'content-type': 'application/json'}
    })
    .then(response => response.json())

export const findTeamsForSA = (saId) =>
    fetch(`${SA_URL}/${saId}/teams`)
        .then(response => response.json())

export const findTeamById = (id) =>
    fetch(`${TEAM_URL}/${id}`)
        .then(response => response.json())

export const updateTeam = (id, team) =>
    fetch(`${TEAM_URL}/${id}`, {
        method: 'PUT',
        body: JSON.stringify(team),
        headers: {'content-type': 'application/json'}
    })
    .then(response => response.json())

const deleteTeam = (id) =>
    fetch(`${TEAM_URL}/${id}`, {
        method: "DELETE"
    })

export default {
    createTeamForSA,
    findTeamsForSA,
    findTeamById,
    updateTeam,
    deleteTeam
}