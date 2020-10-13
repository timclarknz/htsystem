import React, { Component } from 'react';
import MenuItem from './MenuItem';

var menuitem = [{t: "0"},
                {t: "2", title: "Today", fname: "renderToday()", fa: "fas fa-fw fa-calendar"},
                {t: "0"},
                {t: "1", title:"info"},
                {t: "2", title: "Classes",fname:"renderClasses()", fa: "fas fa-fw fa-graduation-cap"},
                {t: "2",title: "Students", fa: "fas fa-user", submenu:[{title: "Active",fname: "renderStudents(1)"},{title: "New",fname: "renderStudents(0)"},{title: "Pending",fname: "renderStudents(2)"},{title: "Stopped",fname: "renderStudents(3)"}]},
                {t: "2", title: "Admin", fa: "fas fa-clipboard", submenu: [{title: "Payments", fname: "renderPayments()"},{title: "Owed", fname: "renderOwed()"},{title: "Costs", fname: "renderCosts()"},{title: "Zalo", fname: "renderZaloFollowers()"},{title:"Problems", fname: "renderProblems()"},{title:"Check Bills", fname: "renderCheckBills()"},{title:"Send Bills", fname: "renderSendBills()"}]},
                {t: "0"},
                {t: "1", title:"Teaching"},
                {t: "2", title: "Feedback", fa: "fas fa-comments", submenu:[{title: "No Classes Today",fname:""}]},
                {t: "2", title: "Care", fa: "fas fa-fw fa-graduation-cap", submenu:[{title: "Today",fname:"renderCare()"},{title: "First Class",fname:"renderNewStudentsToday()"},{title: "Follow Up",fname:"renderFollowUp()"}]}
                ];

export default class Menu extends Component {
    render() {
        return menuitem.map((m) => (
            < div >
                <MenuItem item={m}/>
            </div >
        ));
    }
}
