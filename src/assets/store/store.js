import { reactive } from 'vue'

export const store = reactive({
    params: {
        total: 0,
        tip: 0,                 // % tip
        numPeople: 0,
        pendingToPay:0,
    },

    people: [ 
        // {
        //     id: crypto.randomUUID(),
        //     numPerson: i,
        //     toPay: totalPerPerson,
        //     paid: false,
        // }
    ]
})

export function getTotalPlusTip () {
    const totalPlusTip = store.params.total * (store.params.tip / 100 +1)
    return totalPlusTip
}


export function distributeAccoun(){
    store.people = []

    const numPeople = store.params.numPeople

    const totalPerPerson = getTotalPlusTip() / numPeople;

    for (let index = 0; index < numPeople; index++) {
        store.people.push({
            id: crypto.randomUUID(),
            numPerson: index + 1,
            toPay: totalPerPerson,
            paid: false,
        })
    }

    store.params.pendingToPay = getPendingToPay()

}

export function getPendingToPay() {
    const missingToPay = store.people.filter(el => !el.paid)
    const pendingToPay = missingToPay.reduce( (acc, el) => {
        return acc + el.toPay
    },0)
    return pendingToPay
}
 
export function pay(id, paid){
    const person = store.people.find( el => el.id === id)
    if(!person) return
    person.paid = paid
    store.params.pendingToPay = getPendingToPay()
}

export function cleanAll(){
    store.people = []
    Object.keys(store.params).forEach(key => {
        store.params[key] = 0;
    });
}
