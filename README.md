class component life cycle

*******for**********
            <CompParentClass />
            <CompChildClass />
            <HelloClass />

*********result*********

parent constructor
CompParentClass.js:22 parent render
CompChildClass.js:8 child constructor
CompChildClass.js:22 child render
HelloClass.js:8 HelloClass constructor
HelloClass.js:22 HelloClass render
CompParentClass.js:11 parent component did mount
CompChildClass.js:11 child component did mount
HelloClass.js:11 HelloClass component did mount
CompParentClass.js:22 parent render
CompParentClass.js:19 parent component did update
CompChildClass.js:22 child render
CompChildClass.js:19 child component did update
HelloClass.js:22 HelloClass render
HelloClass.js:19 HelloClass component did update


run 
npx parcel index.html