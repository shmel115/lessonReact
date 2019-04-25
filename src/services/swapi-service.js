export default class SwapiService {
    _apiBase = 'https://swapi.co/api'

    async getResource(url) {
        const res = await fetch(`${this._apiBase}${url}`)
        if (!res.ok) {
            throw new Error(res.status)
        }
        return res.json();
    }

    async getAllPeople() {
        const res = await this.getResource(`/people/`)
        return res.results
    }
    getPerson(id) { return this.getResource(`/people/${id}/`) }

    async getAllPlanets() {
        const res = await this.getResource(`/planets/`)
        return res.results
    }
    getPlanet(id) { return this.getResource(`/planets/${id}/`) }
}