/**
 * The 509 Bandwidth Limit Exceeded error is a message from the server hosting
 * the website you’re trying to visit. It tells you that the website has surpassed
 * its allocated bandwidth limit. Bandwidth, in simple terms, is the amount of
 * data that can be transferred from the website to its visitors over a certain
 * period, usually measured monthly and in gigabytes (GB). When a website exceeds
 * this limit, it essentially runs out of the resources needed to serve its content
 * to users, leading to the appearance of the 509 error.
 *
 * This issue primarily stems from the website’s hosting plan. Hosting providers
 * allocate a certain amount of bandwidth to each website based on the plan that
 * the site owner has chosen. When a site receives more traffic than anticipated
 * or hosts large files for download, it can quickly use up this allocated bandwidth.
 * Additionally, the issue could arise from the website’s code or setup, especially
 * if there are elements that unnecessarily consume bandwidth.
 */
import { ApiError, ApiErrorCode } from "../api-error";

export class BandwidthLimitExceededError extends ApiError<ApiErrorCode> {
    public static readonly STATUS_CODE = 509;

    constructor(
        message: string,
        method?: string,
        url?: string,
    ) {
        super(BandwidthLimitExceededError.STATUS_CODE, message, method, url);
    }
}
