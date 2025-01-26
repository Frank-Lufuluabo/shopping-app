import { TagIcon } from "@sanity/icons";
import { defineField, defineType, } from "sanity";

export const salesType = defineType({
    name: "sale",
    title: "Sale",
    type: "document",
    icon: TagIcon,
    fields: [
        defineField({
            name: "title",
            title: "string",
            type: "Sale Title",
        }),
        defineField({
            name: "description",
            title: "text",
            type: "Sale Description",
        }),
        defineField({
            name: "discountAmount",
            title: "number",
            type: "Discount amount",
            description: "amount off in percentage or fixed value",
        }),
        defineField({
            name: "couponCode",
            title: "string",
            type: "Coupon Code",
        }),
        defineField({
            name: "validFrom",
            title: "datetime",
            type: "Valid From",
        }),
        defineField({
            name: "validuntil",
            title: "datetime",
            type: "Valid Until",
        }),
        defineField({
            name: "isActive",
            title: "boolean",
            type: "Is Active",
            description: "Toggle to avtive/deactivate the sale",
            initialValue: true,
        }),
    ],
    preview: {
        select: {
            title: "title",
            discountAmount: "discountAmount",
            couponCode: "couponCode",
            isActive: "isActive",
        },
        prepare(Selection) {
            const { title, discountAmount, couponCode, isActive} = Selection;
            const status = isActive ? "Active" : "Inactive"
            return {
                title,
                subtitle: `${discountAmount}% off - Code: ${couponCode} - ${status}`,
            }
        }
    }
});