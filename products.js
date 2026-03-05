function fetchProducts() {
    const herbioticProducts = document.getElementById("herbioticProducts");
    herbioticProducts.innerHTML = "";
    products.filter(p => p.status.toLowerCase() === 'active').forEach((p) => {
        let tagCont = "";
        p.tags.forEach(tag => {
            tagCont += `<span class="tag">${tag}</span>`
        });

        herbioticProducts.innerHTML +=
            `<div class="card">
            <div class="img-head">
                <img src="${p.img}"
                    alt="image of ${p.name}">
            </div>
            <div class="body">
                <p class="title">${p.name}</p>
                <div class="tags-cont">${tagCont}</div>
                <p class="desc">${p.descShort}</p>
                <button type="button">Show More</button>
            </div>
        </div>
    `;
    });
}
let products = [
    {
        name: "Glutazin",
        descShort: "Glutathione antioxidant for detox and skin support.",
        descLong: "Herbiotics Glutazin is a potent antioxidant that helps detoxify the body while aiding healthier, more radiant skin.\n\nBenefits:\n- Supports detox processes\n- Improves skin glow and clarity\n- Helps reduce oxidative stress\n- Supports immunity and overall health",
        img: "https://herbiotics.com.pk/cdn/shop/files/glutazin_6929e88e-475e-42a3-a8f9-d37bff1ac932.png?v=1738326312",
        tags: ["skin", "immunity", "health"],
        status: "active"
    },
    {
        name: "Biotin",
        descShort: "High-strength biotin for hair, skin & nails.",
        descLong: "Herbiotics Biotin strengthens hair roots, nourishes skin, and reinforces nails for improved beauty and resilience.\n\nBenefits:\n- Promotes hair growth\n- Improves skin texture\n- Strengthens nails\n- Supports metabolism",
        img: "https://herbiotics.com.pk/cdn/shop/files/Biotin_5000_818d227a-f97d-48b2-bbee-867d3302f78a.png?v=1738326312",
        tags: ["hair", "skin", "nails", "health"],
        status: "active"
    },
    {
        name: "Biotin Plus",
        descShort: "Biotin with added nutrients for enhanced benefits.",
        descLong: "Herbiotics Biotin Plus combines biotin with essential supporting nutrients to boost hair strength and overall vitality.\n\nBenefits:\n- Enhances hair health\n- Improves skin appearance\n- Strengthens brittle nails\n- Supports energy",
        img: "https://herbiotics.com.pk/cdn/shop/files/biotin_plus_30s.png?v=1738326552",
        tags: ["hair", "skin", "nails", "energy"],
        status: "active"
    },
    {
        name: "Herbifactore",
        descShort: "Multivitamin boost for hair, skin & nail vitality.",
        descLong: "Herbiotics Herbifactore delivers essential vitamins and minerals that nourish hair, skin, and nails for natural beauty support.\n\nBenefits:\n- Supports thicker hair\n- Promotes skin health\n- Strengthens nails\n- Provides nutrient support",
        img: "https://herbiotics.com.pk/cdn/shop/files/herbifactor_30s_1.png?v=1738326313",
        tags: ["hair", "skin", "nails", "health"],
        status: "active"
    },
    {
        name: "Evipio",
        descShort: "Vitamin E antioxidant for skin & immune support.",
        descLong: "Herbiotics Evipio offers powerful Vitamin E antioxidant protection that supports skin health and immune response.\n\nBenefits:\n- Protects cells from free radicals\n- Helps improve skin glow\n- Supports immune health\n- Aids overall wellness",
        img: "https://herbiotics.com.pk/cdn/shop/files/evipio_9aff81c2-457e-426c-8f26-9c9b49b07630.png?v=1738423058",
        tags: ["skin", "immunity", "health"],
        status: "active"
    },
    {
        name: "Ginosin",
        descShort: "Antioxidant blend to help reduce inflammation.",
        descLong: "Herbiotics Ginosin supports the body’s antioxidant defenses, helping to reduce inflammation and improve cellular recovery.\n\nBenefits:\n- Provides antioxidant support\n- Reduces inflammation\n- Boosts energy levels\n- Supports general health",
        img: "https://herbiotics.com.pk/cdn/shop/files/Ginosin_eed9a25e-8ec0-409a-a9d1-241b6e0c0032.png?v=1738404361",
        tags: ["immunity", "health", "energy"],
        status: "active"
    },
    {
        name: "L-Carnitine",
        descShort: "Energy booster to support metabolism & performance.",
        descLong: "Herbiotics L-Carnitine aids fat metabolism and energy production, helping enhance exercise performance and reduce fatigue.\n\nBenefits:\n- Supports energy metabolism\n- Helps reduce tiredness\n- Enhances physical performance\n- Aids fat utilization",
        img: "https://herbiotics.com.pk/cdn/shop/files/L_carnitine_f82f1a92-0562-4029-8da2-9307d26414df_785x.png?v=1738388977",
        tags: ["energy", "health"],
        status: "active"
    },
    {
        name: "Prezoom",
        descShort: "Vitamin-rich formula to support eyesight & focus.",
        descLong: "Herbiotics Prezoom delivers essential nutrients for eye health and visual focus while supporting overall well-being.\n\nBenefits:\n- Supports eye health\n- Enhances visual sharpness\n- Provides antioxidant benefits\n- Supports overall health",
        img: "https://herbiotics.com.pk/cdn/shop/files/Prezoom_2_785x.png?v=1738388501",
        tags: ["health", "immunity"],
        status: "active"
    },
    {
        name: "Somnirol",
        descShort: "Herbal support for stress relief & relaxation.",
        descLong: "Herbiotics Somnirol uses calming nutrients to help reduce stress and support balanced energy and relaxation.\n\nBenefits:\n- Helps manage stress\n- Promotes relaxation\n- Supports emotional balance\n- Supports overall health",
        img: "https://herbiotics.com.pk/cdn/shop/files/Somnirol_76a143b8-4375-4fac-9e49-33de3977ebe9_785x.png?v=1738423058",
        tags: ["health", "energy"],
        status: "active"
    },
    {
        name: "Optizone",
        descShort: "Vision support with key nutrients for eye health.",
        descLong: "Herbiotics Optizone provides vitamins and minerals that help maintain healthy vision and eye function.\n\nBenefits:\n- Supports eye health\n- Helps reduce eye strain\n- Provides essential nutrients\n- Improves focus maintenance",
        img: "https://images.pexels.com/photos/3683096/pexels-photo-3683096.jpeg",
        tags: ["health"],
        status: "active"
    },
    {
        name: "Ginkwell",
        descShort: "Ginkgo Biloba supplement for circulation & energy.",
        descLong: "Herbiotics Ginkwell enhances blood circulation and supports cognitive and physical energy by improving oxygen flow.\n\nBenefits:\n- Supports healthy circulation\n- Boosts energy delivery\n- Aids focus and alertness\n- Supports overall health",
        img: "https://herbiotics.com.pk/cdn/shop/files/Ginkwell_0ebc2fbe-5009-4625-8e0d-ca8fb421428b_785x.png?v=1738222201",
        tags: ["health", "energy"],
        status: "active"
    },
    {
        name: "Enzovix",
        descShort: "CoQ10 antioxidant for energy and heart support.",
        descLong: "Herbiotics Enzovix supplies Coenzyme Q10 for cellular energy production and antioxidant protection.\n\nBenefits:\n- Enhances energy at the cellular level\n- Supports heart function\n- Offers antioxidant protection\n- Helps metabolism",
        img: "https://herbiotics.com.pk/cdn/shop/files/Enzovix_81917532-0823-498d-ac15-a098c094e343_785x.png?v=1738404361",
        tags: ["energy", "health"],
        status: "active"
    },
    {
        name: "Glucobex",
        descShort: "Nutrient blend to support blood sugar balance.",
        descLong: "Herbiotics Glucobex helps maintain healthy blood sugar levels with a balanced nutrient formula.\n\nBenefits:\n- Supports blood glucose balance\n- Provides nutritional support\n- Enhances metabolic health\n- Supports overall wellness",
        img: "https://herbiotics.com.pk/cdn/shop/files/Glucobex_1_c2e6448d-7fb1-4641-9d45-5957c3d6af49_785x.png?v=1738234331",
        tags: ["health"],
        status: "active"
    },
    {
        name: "Herilic",
        descShort: "Herbal formula to support liver health.",
        descLong: "Herbiotics Herilic provides herbal nutrients that help detoxify and support healthy liver function.\n\nBenefits:\n- Supports liver detoxification\n- Helps with digestive balance\n- Improves metabolic function\n- Supports overall health",
        img: "https://herbiotics.com.pk/cdn/shop/files/Omega_3_herlic_785x.png?v=1738404361",
        tags: ["health", "detox"],
        status: "active"
    },
    {
        name: "Roxio-D",
        descShort: "Antioxidant plus Vitamin D for immune support.",
        descLong: "Herbiotics Roxio-D combines antioxidant nutrients with Vitamin D to help strengthen immunity.\n\nBenefits:\n- Enhances immunity\n- Provides antioxidant support\n- Supports bone health\n- Helps overall wellness",
        img: "https://images.pexels.com/photos/3683096/pexels-photo-3683096.jpeg",
        tags: ["immunity", "health"],
        status: "active"
    },
    {
        name: "Metadetox",
        descShort: "Detox support blend for body cleansing.",
        descLong: "Herbiotics Metadetox helps flush toxins and supports digestive cleansing for a healthier system.\n\nBenefits:\n- Supports detoxification\n- Aids digestion\n- Enhances energy levels\n- Supports overall wellness",
        img: "https://herbiotics.com.pk/cdn/shop/files/Metadetox_3_785x.png?v=1738388501",
        tags: ["detox", "health"],
        status: "active"
    },
    {
        name: "Hogwed",
        descShort: "Support formula for heart & circulation health.",
        descLong: "Herbiotics Hogwed delivers nutrients that help sustain cardiovascular health and proper blood flow.\n\nBenefits:\n- Supports healthy circulation\n- Helps maintain heart function\n- Provides antioxidant benefits\n- Enhances energy",
        img: "https://herbiotics.com.pk/cdn/shop/files/Hogwed_Moringa_785x.png?v=1738388501",
        tags: ["health", "energy"],
        status: "active"
    },
    {
        name: "Mico-12",
        descShort: "Micronutrient complex for overall wellness.",
        descLong: "Herbiotics Mico-12 supplies essential micronutrients to support body systems and general health balance.\n\nBenefits:\n- Provides key vitamins & minerals\n- Enhances immunity\n- Supports energy levels\n- Aids metabolic functions",
        img: "https://herbiotics.com.pk/cdn/shop/files/Vitaminb12_1880x.png?v=1764240763",
        tags: ["health", "immunity", "energy"],
        status: "active"
    },
    {
        name: "Zinplex",
        descShort: "Zinc supplement to support immunity & skin.",
        descLong: "Herbiotics Zinplex delivers zinc to help maintain immune health and improve skin recovery.\n\nBenefits:\n- Boosts immunity\n- Helps skin repair\n- Supports metabolic health\n- Enhances nutrient balance",
        img: "https://herbiotics.com.pk/cdn/shop/files/zinplex_e01a8fca-d24a-4bb7-bb88-319ff64a448c_785x.png?v=1768474124",
        tags: ["immunity", "skin", "health"],
        status: "active"
    },
    {
        name: "Magnesium Oxide",
        descShort: "Magnesium for muscle, nerve, and energy support.",
        descLong: "Herbiotics Magnesium Oxide provides elemental magnesium to support muscle function, nerve health, and energy production.\n\nBenefits:\n- Supports muscle relaxation\n- Helps nerve signaling\n- Enhances energy production\n- Improves overall balance",
        img: "https://herbiotics.com.pk/cdn/shop/files/magnesium_1_785x.png?v=1738234507",
        tags: ["health", "energy"],
        status: "active"
    },
    {
        name: "Vitix-C",
        descShort: "Vitamin C for immune & skin health.",
        descLong: "Herbiotics Vitix-C delivers Vitamin C to enhance immunity, support collagen production, and improve skin health.\n\nBenefits:\n- Boosts immunity\n- Supports collagen for skin\n- Protects cells with antioxidants\n- Improves overall wellness",
        img: "https://herbiotics.com.pk/cdn/shop/files/Vitix_C_2d359d9a-a3be-455c-98b0-092cd4525b71_785x.png?v=1738059054",
        tags: ["immunity", "skin", "health"],
        status: "active"
    },
    {
        name: "Herbi-C",
        descShort: "Vitamin C formula for immunity support.",
        descLong: "Herbiotics Herbi-C supplies a balanced dose of Vitamin C that helps strengthen the immune system and antioxidant protection.\n\nBenefits:\n- Enhances immune defense\n- Protects against free radicals\n- Supports skin health\n- Aids overall wellness",
        img: "https://herbiotics.com.pk/cdn/shop/files/Herbi_C_9fa8e51f-851c-4d7b-a7c4-26b7ca763014_785x.png?v=1738059054",
        tags: ["immunity", "health"],
        status: "active"
    },
    {
        name: "BN-D3",
        descShort: "Vitamin B complex plus Vitamin D3 blend.",
        descLong: "Herbiotics BN-D3 offers a combined B-vitamin complex with Vitamin D3 to help support energy, immunity, and bone health.\n\nBenefits:\n- Boosts energy production\n- Supports immune system\n- Enhances bone strength\n- Improves general wellbeing",
        img: "https://images.pexels.com/photos/3683096/pexels-photo-3683096.jpeg",
        tags: ["energy", "immunity", "health"],
        status: "active"
    },
    {
        name: "Collagen",
        descShort: "Collagen supplement for skin, hair & joints.",
        descLong: "Herbiotics Collagen helps replenish collagen levels to support skin elasticity, hair strength, and joint health.\n\nBenefits:\n- Improves skin resilience\n- Strengthens hair\n- Supports joint function\n- Provides structural protein support",
        img: "https://herbiotics.com.pk/cdn/shop/files/B_Collagen_New_785x.png?v=1750838609",
        tags: ["skin", "hair", "health"],
        status: "active"
    },
    {
        name: "Magnesium Glycinate",
        descShort: "Gentle magnesium for muscle & nerve balance.",
        descLong: "Herbiotics Magnesium Glycinate provides a gentle form of magnesium that supports muscle relaxation, nerve balance, and energy metabolism.\n\nBenefits:\n- Supports muscle comfort\n- Helps calm nerves\n- Enhances energy balance\n- Improves overall wellness",
        img: "https://herbiotics.com.pk/cdn/shop/files/Magnesium_glycinate_1_785x.png?v=1744882674",
        tags: ["health", "energy"],
        status: "active"
    },
    {
        name: "Alfabone",
        descShort: "Bone health support with calcium & minerals.",
        descLong: "Herbiotics Alfabone delivers calcium and supportive nutrients to help maintain strong bones and skeletal health.\n\nBenefits:\n- Supports bone strength\n- Helps mineral balance\n- Aids calcium absorption\n- Enhances overall health",
        img: "https://herbiotics.com.pk/cdn/shop/files/Alfabon_aaf078d6-2c66-49f9-a354-8ec47916bcb2_785x.png?v=1738222201",
        tags: ["health"],
        status: "active"
    },
    {
        name: "DMFOL",
        descShort: "Folic acid & B-vitamin blend for health.",
        descLong: "Herbiotics DMFOL combines folic acid with essential B-vitamins to support metabolism, energy, and cellular health.\n\nBenefits:\n- Supports cell growth\n- Enhances energy metabolism\n- Aids nutrient absorption\n- Improves overall wellbeing",
        img: "https://herbiotics.com.pk/cdn/shop/files/DMFOL_30s_b72b8ad1-1712-4404-b140-f35fd7e4ec2c_785x.png?v=1738222201",
        tags: ["health", "energy"],
        status: "active"
    },
    {
        name: "Calfint-D",
        descShort: "Calcium & Vitamin D support for healthy bones.",
        descLong: "Herbiotics Calfint-D provides essential calcium and Vitamin D to help maintain healthy bone structure and strength.\n\nBenefits:\n- Supports strong bones\n- Helps calcium absorption\n- Enhances skeletal health\n- Aids immune wellness",
        img: "https://herbiotics.com.pk/cdn/shop/files/calfint_d_10000_f21e4651-29b1-4cca-8abe-a68ad5dc7388_785x.png?v=1768474124",
        tags: ["health"],
        status: "active"
    },
    {
        name: "Remesol",
        descShort: "Herbal support for detox and balanced health.",
        descLong: "Herbiotics Remesol uses herbal nutrients to help cleanse the body and support overall health balance.\n\nBenefits:\n- Supports detox functions\n- Enhances digestion\n- Boosts energy levels\n- Supports immune health",
        img: "https://herbiotics.com.pk/cdn/shop/files/Remesol_tab_785x.png?v=1738404361",
        tags: ["detox", "health"],
        status: "active"
    },
    {
        name: "Multipill",
        descShort: "Multivitamin complex for daily wellness.",
        descLong: "Herbiotics Multipill delivers a wide range of vitamins and minerals to support daily health and vitality.\n\nBenefits:\n- Provides essential vitamins\n- Supports immunity\n- Enhances energy\n- Aids overall wellbeing",
        img: "https://herbiotics.com.pk/cdn/shop/files/Multipill_30s_1_785x.png?v=1738234507",
        tags: ["health", "immunity", "energy"],
        status: "active"
    },
    {
        name: "Arsio",
        descShort: "Digestive enzyme blend for nutrient support.",
        descLong: "Herbiotics Arsio provides digestive enzymes to help improve digestion and nutrient absorption.\n\nBenefits:\n- Enhances digestion\n- Helps nutrient breakdown\n- Supports metabolism\n- Improves overall health",
        img: "https://herbiotics.com.pk/cdn/shop/files/Arsio_62aa0a2d-46de-4874-b500-832e4a8aadc9_785x.png?v=1738404361",
        tags: ["health"],
        status: "active"
    },
    {
        name: "Multilife",
        descShort: "Complete multivitamin support for overall health.",
        descLong: "Herbiotics Multilife offers a comprehensive blend of vitamins and minerals to support general health, immunity, and energy.\n\nBenefits:\n- Provides broad nutrient coverage\n- Boosts immunity\n- Enhances energy\n- Supports overall wellbeing",
        img: "https://herbiotics.com.pk/cdn/shop/files/Multilife_30s_785x.png?v=1738326313",
        tags: ["health", "immunity", "energy"],
        status: "active"
    },
    {
        name: "Iroplex",
        descShort: "Iron formula to support blood health & energy.",
        descLong: "Herbiotics Iroplex helps maintain healthy iron levels, supporting blood health and reducing fatigue.\n\nBenefits:\n- Helps iron balance\n- Supports energy production\n- Reduces tiredness\n- Enhances overall health",
        img: "https://herbiotics.com.pk/cdn/shop/files/Iroplex_5349054f-31e1-48a0-b0ab-46f07a4d57b0_785x.png?v=1738404361",
        tags: ["health", "energy"],
        status: "active"
    },
    {
        name: "Pregnafix",
        descShort: "Prenatal support with essential vitamins.",
        descLong: "Herbiotics Pregnafix supplies essential vitamins and minerals for pregnancy support and maternal wellbeing.\n\nBenefits:\n- Supports maternal nutrition\n- Enhances energy levels\n- Helps fetal development\n- Supports overall health",
        img: "https://herbiotics.com.pk/cdn/shop/files/pregnafix_1_785x.png?v=1738391522",
        tags: ["health"],
        status: "active"
    },
    {
        name: "Collagix",
        descShort: "Advanced collagen formula for skin & joints.",
        descLong: "Herbiotics Collagix supports skin elasticity, joint comfort, and connective tissue strength with specialized collagen nutrients.\n\nBenefits:\n- Improves skin firmness\n- Supports joint health\n- Enhances connective tissue\n- Boosts overall wellness",
        img: "https://herbiotics.com.pk/cdn/shop/files/collagen_d0a5226c-a2ea-4129-9550-f3114271b38d_785x.png?v=1738326312",
        tags: ["skin", "health"],
        status: "active"
    },
    {
        name: "Noflaw",
        descShort: "Anti-inflammatory support for joints & comfort.",
        descLong: "Herbiotics Noflaw helps reduce inflammation and support joint comfort with its targeted nutrient blend.\n\nBenefits:\n- Helps reduce inflammation\n- Supports joint health\n- Improves mobility comfort\n- Enhances overall wellbeing",
        img: "https://herbiotics.com.pk/cdn/shop/files/noflaw_f7293446-51ff-45b5-8100-23de8a89c8ab_785x.png?v=1738326312",
        tags: ["health"],
        status: "active"
    },
    {
        name: "White-Vit",
        descShort: "Skin brightening vitamin formula.",
        descLong: "Herbiotics White-Vit delivers brightening vitamins and antioxidants that help improve skin tone and radiance.\n\nBenefits:\n- Enhances skin brightness\n- Provides antioxidant support\n- Improves complexion\n- Supports skin health",
        img: "https://herbiotics.com.pk/cdn/shop/files/White_vit_06158171-696c-426f-b59d-6f418dbbf53a_785x.png?v=1738326312",
        tags: ["skin", "health"],
        status: "active"
    },
    {
        name: "Biotin Shampoo",
        descShort: "Biotin-infused shampoo for stronger hair.",
        descLong: "Herbiotics Biotin Shampoo cleanses hair while delivering biotin and nutrients to strengthen hair and promote thickness.\n\nBenefits:\n- Cleanses and nourishes scalp\n- Promotes hair strength\n- Helps reduce hair breakage\n- Enhances shine",
        img: "https://herbiotics.com.pk/cdn/shop/files/biotinshampoo_785x.png?v=1759739635",
        tags: ["hair", "health"],
        status: "active"
    }
];

fetchProducts();