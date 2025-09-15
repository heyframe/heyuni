import useContext from '@/app/composables/useApiContext/use-context';
import HeyUni from "@/heyuni-instance";

/**
 * @sw-package framework
 *
 * @private
 * @module core/factory/context
 * @param {Object} context
 * @type factory
 */
export default function createContext(context = {}) {
    const contextStore = useContext();

    // assign unknown context information
    Object.entries(context).forEach(
        ([
            key,
            value,
        ]) => {
            contextStore.addApiValue({ key, value });
        },
    );

    return HeyUni.Context.api;
}
