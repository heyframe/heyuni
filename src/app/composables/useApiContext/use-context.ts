import { computed, reactive } from 'vue';

/**
 * @private
 */
export interface ContextState {
    api:{
        baseURL: null | string;
        accessToken: null | string;
    }
}

const state: ContextState = reactive({
    api:{
        baseURL: null,
        accessToken: null,
    }
});

function addApiValue<K extends keyof ContextState['api']>({ key, value }: { key: K; value: ContextState['api'][K] }) {
    state.api[key] = value;
}

/**
 * @private
 */
export default function useContext() {
    return {
        ...state,
        addApiValue,
    };
}
