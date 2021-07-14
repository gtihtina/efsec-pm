const admin = require('../db');
const firestore = admin.firestore()

const { createProjectObject, createProjectsObjectIfData } = require('./utils/projectUtils')

const genAddProject = async (data) => {
    try {
        await firestore.collection('projects').doc().set(data);
        return 'Record saved successfuly';
    } catch (error) {
        functions.logger.warn("error\n" + error)
        return 'Failed. Try again.'
    }
}

const genAllProjects = async () => {
    try {
        const data = await firestore.collection('projects').get();
        return createProjectsObjectIfData(data)
    } catch (error) {
        functions.logger.warn("error\n" + error);
        return null
    }
}

const genAllOpenProjects = async () => {
    try {
        const data = await firestore.collection('projects')
            .where('status', '!=', 'closed')
            .get();
        const noDataWarning = "No open projects in database"
        return createProjectsObjectIfData(data, noDataWarning)
    } catch (error) {
        functions.logger.warn("error\n" + error);
        return null
    }
}

const genAllOpenProjectsWithStatus = async (status) => {
    try {
        const data = await firestore.collection('projects')
            .where('status', "==", status)
            .get();
        const noDataWarning = `No projects with ${status}`
        return createProjectsObjectIfData(data, noDataWarning)
    } catch (error) {
        functions.logger.warn("error\n" + error);
        return null
    }
}

const genAllOpenProjectsWithSource = async (source) => {
    try {
        var open_projects = await genAllOpenProjects()
        const data = open_projects.filter(project => project.getSource() == source)
        if (data.length == 0) {
            functions.logger.warn(`No open projects with source ${source}`)
            return null;
        } else {
            return data;
        }
    } catch (error) {
        functions.logger.warn("error\n" + error);
        return null
    }
}

const genAllOpenProjectsWithBoM = async () => {
    try {
        var open_projects = await genAllOpenProjects()
        const data = open_projects.filter(project =>
            project.getBoM() != '' &&
            project.getBoM() != null)
        if (data.length == 0) {
            functions.logger.warn("No open projects have BoMs")
            return null;
        } else {
            return data;
        }
    } catch (error) {
        functions.logger.warn("error\n" + error);
        return null
    }
}

const genAllOpenProjectsWithBoQ = async () => {
    try {
        var open_projects = await genAllOpenProjects()
        const data = open_projects.filter(project =>
            project.getBoQ() != '' &&
            project.getBoQ() != null)
        if (data.length == 0) {
            functions.logger.warn("No open projects have BoQs")
            return null;
        } else {
            return data;
        }
    } catch (error) {
        functions.logger.warn("error\n" + error);
        return null
    }
}

const genAllOpenProjectsWithRevisedBoQ = async () => {
    try {
        var open_projects = await genAllOpenProjects()
        const data = open_projects.filter(project =>
            project.getRevisedBoQ() != '' &&
            project.getRevisedBoQ() != null)
        if (data.length == 0) {
            functions.logger.warn("No open projects have revised BoQs")
            return null;
        } else {
            return data;
        }
    } catch (error) {
        functions.logger.warn("error\n" + error);
        return null
    }
}

const genProjectWithId = async (id) => {
    try {
        const project = await firestore.collection('projects').doc(id);
        const data = await project.get();
        if (!data.exists) {
            functions.logger.warn(`Project with id ${id} does not exist`)
            return null;
        } else {
            return createProjectObject(data);
        }
    } catch (error) {
        functions.logger.warn("error\n" + error);
        return null
    }
}

const genProjectWithTrelloCardId = async (idCard) => {
    try {
        const data = await firestore.collection('projects')
            .where('trelloCardId', '==', idCard)
            .get();
        const noDataWarning = `Project with trelloCardID ${idCard} doesnt exist`
        return createProjectsIfData(data, noDataWarning)[0] // get the first and only project with cardId
    } catch (error) {
        functions.logger.warn("error\n" + error);
        return null
    }
}

const genUpdateProject = async (id, data) => {
    try {
        await firestore.collection('projects').doc(id).update(data);
        return 'Record updated successfuly';
    } catch (error) {
        functions.logger.warn("error\n" + error)
        return 'Failed. Try again.'
    }
}

const genDeleteProject = async (id) => {
    try {
        await firestore.collection('projects').doc(id).delete();
        return 'Record deleted successfuly';
    } catch (error) {
        functions.logger.warn("error\n" + error)
        return 'Failed. Try again.'
    }
}

module.exports = {
    genAddProject,
    genAllProjects,
    genProjectWithId,
    genProjectWithTrelloCardId,
    genAllOpenProjects,
    genAllOpenProjectsWithRevisedBoQ,
    genAllOpenProjectsWithSource,
    genAllOpenProjectsWithBoM,
    genAllOpenProjectsWithBoQ,
    genAllOpenProjectsWithStatus,
    genUpdateProject,
    genDeleteProject,
}