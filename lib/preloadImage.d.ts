/**
 * Preload an image for the browser, resolves to success/error state.
 * @category Media
 * @arg {Object} sources
 * @arg {?string} sources.srcset A valid srcset attribute string for an image element.
 * @arg {?string} sources.sizes A valid sizes attribute string for an image element.
 * @arg {?string} sources.src A valid src attribute string for an image element.
 * @returns {Promise.<boolean>}
 */
export function preloadImage({ srcset, sizes, src }: {
    srcset: string | null;
    sizes: string | null;
    src: string | null;
}): Promise<boolean>;
