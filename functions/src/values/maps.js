const { project_status } = require('./enums')
const trello_idList_to_project_status_map = {
    "60ebf71146943f74dd3bcff9": project_status.INIT,
    "60ebf73ffa857e50ee51fdc8": project_status.PROCUREMENT_REVIEW,
    "60ebf7461c682f5383b72f3f": project_status.SALES_REVIEW_1,
    "60ec6aae14cec07052ec845b": project_status.SALES_REVIEW_2,
    "60ebf74f120d95245d199f43": project_status.MANAGER_REVIEW,
    "60ec6b13e391c0088ec3a372": project_status.SIGNED,
    "60ebf759d10d6e3a84ef8a38": project_status.PENDING,
    "60ec6b19f723a40df4169805": project_status.DROPPED,
}

const project_status_to_trello_idList_map = {
    "initialize": "60ebf71146943f74dd3bcff9",
    "under procurement review": "60ebf73ffa857e50ee51fdc8",
    "under sales review": "60ebf7461c682f5383b72f3f",
    "ready for client": "60ec6aae14cec07052ec845b",
    "under manager review": "60ebf74f120d95245d199f43",
    "signed": "60ec6b13e391c0088ec3a372",
    "pending": "60ebf759d10d6e3a84ef8a38",
    "dropped": "60ec6b19f723a40df4169805",
}

const project_type_to_IdLabel = {
    "Project": "60ec0466bbdf718fe9719088",
    "Item Sale": "60ebf5dfc82461383053a1c6",
    "Bid": "60ec0471114c63335e268f1b"
}
module.exports = {
    trello_idList_to_project_status_map,
    project_status_to_trello_idList_map,
    project_type_to_IdLabel
}
