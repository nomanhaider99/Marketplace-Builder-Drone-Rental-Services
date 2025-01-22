type ShipmentType = {
    label_id: string;
    status: string;
    shipment_id: string;
    external_shipment_id: string;
    external_order_id: string | null;
    ship_date: string;
    created_at: string;
    shipment_cost: CurrencyAmount;
    insurance_cost: CurrencyAmount;
    requested_comparison_amount: number | null;
    rate_details: RateDetail[];
    tracking_number: string;
    is_return_label: boolean;
    rma_number: string | null;
    is_international: boolean;
    batch_id: string;
    carrier_id: string;
    service_code: string;
    package_code: string;
    voided: boolean;
    voided_at: string | null;
    label_format: string;
    display_scheme: string;
    label_layout: string;
    trackable: boolean;
    label_image_id: string | null;
    carrier_code: string;
    tracking_status: string;
    label_download: LabelDownload;
    form_download: string | null;
    qr_code_download: string | null;
    insurance_claim: string | null;
    paperless_download: string | null;
    packages: Package[];
    charge_event: string;
    alternative_identifiers: string[];
    shipping_rule_id: string | null;
    tracking_url: string;
    ship_to: {
        geolocation: string[];
        instructions: string | null;
        name: string;
        phone: string;
        email: string | null;
        company_name: string | null;
        address_line1: string;
        address_line2: string | null;
        address_line3: string | null;
        city_locality: string;
        state_province: string;
        postal_code: string;
        country_code: string;
        address_residential_indicator: string;
    };
};

type CurrencyAmount = {
    currency: string;
    amount: number;
};

type RateDetail = {
    rate_detail_type: string;
    carrier_description: string;
    carrier_billing_code: string | null;
    carrier_memo: string | null;
    amount: CurrencyAmount;
    billing_source: string;
};

type LabelDownload = {
    pdf: string;
    png: string;
    zpl: string;
    href: string;
};

type Package = {
    package_id: number;
    package_code: string;
    weight: Weight;
    dimensions: Dimensions;
    insured_value: CurrencyAmount;
    tracking_number: string;
    label_download: LabelDownload;
    qr_code_download: string | null;
    paperless_download: string | null;
    label_messages: LabelMessages;
    external_package_id: string | null;
    content_description: string | null;
    sequence: number;
    alternative_identifiers: string[];
    has_label_documents: boolean;
    has_form_documents: boolean;
    has_qr_code_documents: boolean;
    has_paperless_label_documents: boolean;
};

type Weight = {
    value: number;
    unit: string;
};

type Dimensions = {
    unit: string;
    length: number;
    width: number;
    height: number;
};

type LabelMessages = {
    reference1: string | null;
    reference2: string | null;
    reference3: string | null;
};

type Address = {
    geolocation: string[];
    instructions: string | null;
    name: string;
    phone: string;
    email: string | null;
    company_name: string | null;
    address_line1: string;
    address_line2: string | null;
    address_line3: string | null;
    city_locality: string;
    state_province: string;
    postal_code: string;
    country_code: string;
    address_residential_indicator: string;
};
