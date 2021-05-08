/**
 * This class is the controller for the main view for the application. It is specified as
 * the "controller" of the Main view class.
 *
 */
Ext.define('albtec.easycom.view.timerecord.Model', {
    extend: 'Ext.app.ViewModel',

    alias: 'viewmodel.timerecord',

    stores: {
        timerecords: {
            model: 'albtec.easycom.model.Timerecord',
            autoLoad: false
        }
    },

    formulas: {
        currentTimerecord: {
            // We need to bind deep to be notified on each model change
            bind: {
                bindTo: '{timerecordlist.selection}', //--> reference configurated on the grid view (reference: groupGrid)
                deep: true
            },
            get: function (record) {
                return record;
            },
            set: function (record) {
                if (!record.isModel) {
                    record = this.get('timerecords').getById(record);
                }
                this.set('currentTimerecord', record);
            }
        },
        status: {
            bind: {
                bindTo: '{currentTimerecord}',
                deep: true
            },
            get: function (timerecord) {
                var ret = {
                    dirty: timerecord ? timerecord.dirty : false,
                    valid: timerecord && timerecord.isModel ? timerecord.isValid() : false
                };
                ret.dirtyAndValid = ret.dirty && ret.valid;
                return ret;
            }
        }
    }

});
