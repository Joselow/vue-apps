import { defineStore } from 'pinia'
export const useFeedStore = defineStore({
    id: 'feedStore',
    state: () => {
        return{
            sources: [
                {
                    id: crypto.randomUUID(),
                    name: 'Mozilla HAcksitow',
                    url: 'https://hacks.mozilla.org/feed'
                }
            ],

            currentFeed: {
                source: null, 
                items: null,
            }
        }
    },

    actions: {
        async loadSource(source){

        },
        
        async registerNewSource(url){

        }
    }
})