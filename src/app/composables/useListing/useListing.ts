import {Schemas} from "@heyframe/uni-api-client/api-types/frontApiTypes";
import {operations} from "@/api-client/api-types/adminApiTypes";
import {useHeyFrameContext} from "@/app/composables/useHeyFrameContext/useHeyFrameContext";

function isObject<T>(item: T): boolean {
  return item && typeof item === "object" && !Array.isArray(item);
}
function merge<T extends { [key in keyof T]: unknown }>(
  target: T,
  ...sources: T[]
): T {
  if (!sources.length) return target;
  const source = sources.shift();

  if (source === undefined) {
    return target;
  }

  if (isObject(target) && isObject(source)) {
    for (const key in source) {
      if (isObject(source[key])) {
        if (!target[key]) Object.assign(target, { [key]: {} });
        merge(target[key], source[key]);
      } else {
        Object.assign(target, { [key]: source[key] });
      }
    }
  }

  return merge(target, ...sources);
}

export type ListingType = "productSearchListing" | "categoryListing";

export type ShortcutFilterParam<
  T extends
    keyof Schemas["ProductListingCriteria"] = keyof Schemas["ProductListingCriteria"],
> = {
  code: T;
  value: Schemas["ProductListingCriteria"][T];
};
export type UseListingReturn = {}

/**
 * @public
 * @category Product
 */
export function useListing(params?: {
  listingType: ListingType;
  categoryId?: string;
}){
  const listingType = params?.listingType || "categoryListing";
  let categoryId = params?.categoryId || null;

  const { apiClient } = useHeyFrameContext();


}
