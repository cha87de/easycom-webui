/**
 * This class is the controller for the main view for the application. It is specified as
 * the "controller" of the Main view class.
 *
 */
Ext.define('albtec.easycom.view.main.MainModel', {
    extend: 'Ext.app.ViewModel',

    alias: 'viewmodel.main',

    stores: {
	customers: {
                model: 'albtec.easycom.model.Customer',
                autoLoad: true
	},
	timerecords: {
                model: 'albtec.easycom.model.Timerecord',
                autoLoad: false
	},
	invoices: {
                model: 'albtec.easycom.model.Invoice',
                autoLoad: false
	},
	invoiceitems: {
                model: 'albtec.easycom.model.InvoiceItem',
                autoLoad: false
	}
    },
    
    formulas: {
    
	// CUSTOMER
        currentCustomer: {
            // We need to bind deep to be notified on each model change
            bind: {
                bindTo: '{customerlist.selection}', //--> reference configurated on the grid view (reference: groupGrid)
                deep: true
            },
            get: function(record) {
                return record;
            },
            set: function(record) {
                if(!record.isModel) {
                    record = this.get('customers').getById(record);
                }
                this.set('currentCustomer', record);
            }
        },
	
	currentCustomer_status: {
		bind: {
			bindTo: '{currentCustomer}',
			deep: true
		},
		get: function(customer) {
			var ret = {
				dirty: customer ? customer.dirty : false,
				valid: customer && customer.isModel ? customer.isValid() : false
			};
			ret.dirtyAndValid = ret.dirty && ret.valid;
			return ret;		
		}
	},
	
	// TIMERECORDS
	currentTimerecord: {
            bind: {
                bindTo: '{timerecordlist.selection}',
                deep: true
            },
            get: function(record) {
                return record;
            },
            set: function(record) {
                if(!record.isModel) {
                    record = this.get('timerecords').getById(record);
                }
                this.set('currentTimerecord', record);
            }
	},
	
	currentTimerecord_status: {
		bind: {
			bindTo: '{currentTimerecord}',
			deep: true
		},
		get: function(timerecord) {
			var ret = {
				dirty: timerecord ? timerecord.dirty : false,
				valid: timerecord && timerecord.isModel ? timerecord.isValid() : false
			};
			ret.dirtyAndValid = ret.dirty && ret.valid;
			return ret;		
		}
	},
	
	// TIMERECORDS START/END TIME/DATE SPLIT
	currentTimerecord_starttime: {
		bind: {
			bindTo: '{timerecordlist.selection.start}',
			deep: true
		},	
		get: function(record){
			if(this.get('timerecordlist.selection'))
				return this.get('timerecordlist.selection').get('start');
			else
				return null;
		}
	},
	currentTimerecord_startdate: {
		bind: {
			bindTo: '{timerecordlist.selection.start}',
			deep: true
		},	
		get: function(record){
			if(this.get('timerecordlist.selection'))
				return this.get('timerecordlist.selection').get('start');
			else
				return null;
		}
	},
	currentTimerecord_endtime: {
		bind: {
			bindTo: '{timerecordlist.selection.end}',
			deep: true
		},	
		get: function(record){
			if(this.get('timerecordlist.selection'))
				return this.get('timerecordlist.selection').get('end');
			else
				return null;
		}
	},
	currentTimerecord_enddate: {
		bind: {
			bindTo: '{timerecordlist.selection.end}',
			deep: true
		},	
		get: function(record){
			if(this.get('timerecordlist.selection'))
				return this.get('timerecordlist.selection').get('end');
			else
				return null;
		}
	},
	
	// INVOICES
	currentInvoice: {
            bind: {
                bindTo: '{invoicelist.selection}',
                deep: true
            },
            get: function(record) {
                return record;
            },
            set: function(record) {
                if(!record.isModel) {
                    record = this.get('invoices').getById(record);
                }
                this.set('currentInvoice', record);
            }
	},
	currentInvoice_status: {
		bind: {
			bindTo: '{currentInvoice}',
			deep: true
		},
		get: function(record) {
			var ret = {
				dirty: record ? record.dirty : false,
				valid: record && record.isModel ? record.isValid() : false
			};
			ret.dirtyAndValid = ret.dirty && ret.valid;
			return ret;		
		}
	}
	
	// INVOICEITEMS
	// necessary ?
		
    }    

});
