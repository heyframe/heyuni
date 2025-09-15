/**
 * @sw-package framework
 */
import useContext from '@/app/composables/useApiContext/use-context';
import HeyUni from "@/heyuni-instance";

const contextStore = HeyUni.Store.register('context', useContext);

/**
 * @private
 * @description
 * The context store holds information about the current context of the application.
 */
export default contextStore;

/**
 * @private
 */
export type ContextStore = ReturnType<typeof contextStore>;
