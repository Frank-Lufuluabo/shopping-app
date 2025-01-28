import { TagIcon } from "@sanity/icons"; // Replace with any relevant icon for sales
import { defineField, defineType, } from "sanity";

export const salesType = defineType({
    name: "sale",
    title: "Sale",
    type: "document",
    icon: TagIcon,
    fields: [
        defineField({
            name: "title",
            type: "string",
            title: "Sale Title",
        }),
        defineField({
            name: "description",
            type: "text",
            title: "Sale Description",
        }),
        defineField({
            name: "discountAmount",
            type: "number",
            title: "Discount amount",
            description: "Amount off in percentage or fixed value",
        }),
        defineField({
            name: "couponCode",
            type: "string",
            title: "Coupon Code",
        }),
        defineField({
            name: "validFrom",
            type: "datetime",
            title: "Valid From",
        }),
        defineField({
            name: "validuntil",
            type: "datetime",
            title: "Valid Until",
        }),
        defineField({
            name: "isActive",
            type: "boolean",
            title: "Is Active",
            description: "Toggle to active/deactivate the sale",
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