import { Template } from 'meteor/templating';
import { Tracker } from "meteor/tracker";
import SimpleSchema from "simpl-schema";
SimpleSchema.extendOptions(['autoform']);
import { Books } from '../api/book-schema';
import '../ui/App.html'
import { AutoFormThemeBootstrap4 } from 'meteor/communitypackages:autoform-bootstrap4/dynamic'

Books.attachSchema(new SimpleSchema({
    title: {
        type: String,
        label: "Title",
        max: 200
    },
    author: {
        type: String,
        label: "Author"
    },
    createdAt: {
        type: Date,
        autoValue: function () {
            return new Date()
        }
    },
}, { tracker: Tracker }));