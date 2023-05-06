import { createStore, Store } from "arachnoid";

interface State  {
    packageManager: 'npm' | 'yarn';
    language: 'javascript' | 'typescript';
}

const store:Store<State> = {
    state: {
        packageManager: 'npm',
        language: 'javascript',
    },

    actions: {
        togglePackageManager: (_, set, {packageManager})=>{
            set(state=>({
                ...state,
                packageManager,
            }))
        },
        toggleLanguage: (_, set, {language})=>{
            set(state=>({
                ...state,
                language
            }))
        }
    }
}

const useLandingPageStore = createStore(store);

export default useLandingPageStore;