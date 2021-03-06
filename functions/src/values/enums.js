const project_status = {
    INIT: 'initialize',
    // SALES_REVIEW_1: 'under sales review', // when procurement returns // hide from viewers
    // PROCUREMENT_REVIEW: 'under procurement review', // hide from viewers
    // SALES_REVIEW_2: 'ready for client', // when managers return // hide from viewers
    // MANAGER_REVIEW: 'under manager review', // hide from viewers
    // PENDING: 'pending',
    SIGNED: 'signed',
    DROPPED: 'dropped',
    CLOSED: 'closed',
}

const employee_status = {
    PENDING_APPROVAL: 'pending_approval',
    ACTIVE: 'active',
    TERMINATED: 'terminated'
}

const payment_mode = {
    CASH: 'cash',
    CREDIT: 'credit',
    CHECK: 'check',
}

const payment_status = {
    PENDING: 'pending',
    ADVANCE_PAID: 'advance_paid',
    FULLY_PAID: 'fully_paid'
}

const file_purpose = {
    PROFILE_PIC: 'profile_picture',
    BoM: 'BoM',
    BoQ: 'BoQ',
    BoQ_revised: 'BoQ_revised',
    PI: 'proforma',
    PO: 'purchase_order',
    CONTRACT: 'contract',
    BID: 'bid',
    OTHER: 'other'
}

const project_source = {
    BID: 'bid',
    RETAIL: 'retail',
    PROJECT: 'project',
    SUPPORT: 'support'
}

const access_to = {
    SALES: 'sales',
    PROCUREMENT: 'procurement',
    MANAGEMENT: 'management',
    ADMIN: 'admin'
}

const google_sheet_functions = {
    ADD_PROJECT: 'add_project',

}
module.exports = {
    project_status,
    employee_status,
    payment_mode,
    payment_status,
    file_purpose,
    project_source,
    access_to,
    google_sheet_functions
}
