/**
 * @class SceneNode
 * @desc A SceneNode is a node in the scene graph.
 * @property {MeshDrawer} meshDrawer - The MeshDrawer object to draw
 * @property {TRS} trs - The TRS object to transform the MeshDrawer
 * @property {SceneNode} parent - The parent node
 * @property {Array} children - The children nodes
 */

class SceneNode {
    constructor(meshDrawer, trs, parent = null) {
        this.meshDrawer = meshDrawer;
        this.trs = trs;
        this.parent = parent;
        this.children = [];

        if (parent) {
            this.parent.__addChild(this);
        }
    }

    __addChild(node) {
        this.children.push(node);
    }

    draw(mvp, modelView, normalMatrix, modelMatrix) {
        // Get the transformation matrix for this node
        let nodeTransform = this.trs.getTransformationMatrix();
        
        // Multiply matrices in correct order (parent * local)
        let transformedModel = MatrixMult(modelMatrix, nodeTransform);
        let transformedModelView = MatrixMult(modelView, nodeTransform);
        let transformedMvp = MatrixMult(mvp, nodeTransform);
        
        // Normal matrix needs special handling
        let transformedNormals = MatrixMult(normalMatrix, nodeTransform);
        
        if (this.meshDrawer) {
            this.meshDrawer.draw(transformedMvp, transformedModelView, transformedNormals, transformedModel);
        }
        
        // Pass transformed matrices to children
        for (let child of this.children) {
            child.draw(transformedMvp, transformedModelView, transformedNormals, transformedModel);
        }
    }

    

}