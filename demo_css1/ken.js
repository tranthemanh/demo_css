(function () {
    'use strict';
    /* ken.codegym.vn*/
    // (function getBearerToken() {
    //   return localStorage.getItem('token').split(' ')[1];
    // })();
    const BOARD_ID = '27245';
    const TODAY_COLUMN = 1378301;
    const TODO_COLUMN = 137475;
    const CURRENT_COLUMN = TODO_COLUMN;
    const WEEK1 = 125306;
    const WEEK2 = 125102;
    const WEEK3 = 125308;
    const CURRENT_WEEK = WEEK2;
    const TOKEN = 'eyJhbGciOiJSUzI1NiIsInR5cCIgOiAiSldUIiwia2lkIiA6ICJ6VV9xQ3hiYW5sMmM2ZE83ZFJrMGJWSHpSU0xsejdocE9tZUsxV1JVbF80In0.eyJleHAiOjE3MzAzMzYzODIsImlhdCI6MTcyMTY5NjM4MiwiYXV0aF90aW1lIjoxNzIxNjk2MzgyLCJqdGkiOiJmOTRkYzQ1Zi0xNjc2LTQ3MTItYjlmMS1kYTdiMTljZGIzMWEiLCJpc3MiOiJodHRwczovL2lkLmNvZGVneW0udm4vYXV0aC9yZWFsbXMvY29kZWd5bSIsImF1ZCI6ImFjY291bnQiLCJzdWIiOiJkNDZjOGE3Zi00ZDc2LTQ3MDYtODZhOC02NGM1Mjc0OWYzOWIiLCJ0eXAiOiJCZWFyZXIiLCJhenAiOiJjb2RlZ3ltLWtlbi1mcm9udGVuZCIsIm5vbmNlIjoiMjgxMDhkNWYtZWRiNS00M2I0LWI0NGQtNmViZjM3OWMxYTQ1Iiwic2Vzc2lvbl9zdGF0ZSI6IjU4ODYwNjY4LWE4MTUtNGI1NC1iMjRiLWFkMTA2ZWEwNjFjYiIsImFjciI6IjEiLCJhbGxvd2VkLW9yaWdpbnMiOlsiaHR0cHM6Ly9rZW4uY29kZWd5bS52biJdLCJyZWFsbV9hY2Nlc3MiOnsicm9sZXMiOlsib2ZmbGluZV9hY2Nlc3MiLCJ1bWFfYXV0aG9yaXphdGlvbiIsImRlZmF1bHQtcm9sZXMtY29kZWd5bSBjbG91ZCJdfSwicmVzb3VyY2VfYWNjZXNzIjp7ImNvZGVneW0ta2VuLWZyb250ZW5kIjp7InJvbGVzIjpbIm9mZmxpbmVfYWNjZXNzIiwidW1hX2F1dGhvcml6YXRpb24iLCJkZWZhdWx0LXJvbGVzLWNvZGVneW0gY2xvdWQiXX0sImFjY291bnQiOnsicm9sZXMiOlsibWFuYWdlLWFjY291bnQiLCJtYW5hZ2UtYWNjb3VudC1saW5rcyIsInZpZXctcHJvZmlsZSJdfX0sInNjb3BlIjoib3BlbmlkIGVtYWlsIHByb2ZpbGUiLCJzaWQiOiI1ODg2MDY2OC1hODE1LTRiNTQtYjI0Yi1hZDEwNmVhMDYxY2IiLCJlbWFpbF92ZXJpZmllZCI6dHJ1ZSwibmFtZSI6IlRy4bqnbiBUaOG6vyBN4bqhbmgiLCJwcmVmZXJyZWRfdXNlcm5hbWUiOiI2NzQxIiwiZ2l2ZW5fbmFtZSI6IlRy4bqnbiIsImZhbWlseV9uYW1lIjoiVGjhur8gTeG6oW5oIiwiZW1haWwiOiJ0cmFubWFuaGh1aGFAZ21haWwuY29tIn0.AHzAJhIIdivH6IdAqg704LXiIWZ31sq8sYmf_QyihtpQjxTKIcM4hANeZTTpXqr1lyStD15BPbyHhJXnsLXKWqUOkuX-24PMIEqHfpGEJHHohEJ0iBBiFvXFsl2LkB6tsg7eUHyKrg6m3LxL1cnWx2GxDL10T0z2PPWDbcSaZx-1tYq8TMsxTn6upUPBH1E8BoYvwscX1VneceSr2OWx2exHZyIlBxp92mDqQLPqo4SmA4dB9awrovrEIgjfuxJvLixrYT0X_42Q2jwjrHyMP3QbkUX9-t3OEZ_1HSIe_ZNu8aN7LCgHn19qaGEdVgWT8WSWy9lkUOCDdgCi6qIGlQ';
    const titleList = [];
    const items = document.querySelectorAll(
        'div.single-section span.instancename'
    );
    items.forEach((node) => {
        titleList.push(node.firstChild.data);
    });
    titleList.forEach((title) => {
        postToKen(title)
            .then((res) => {
                console.log(`success: ${res}`);
            })
            .catch((err) => {
                console.log(`error: ${err}`);
            });
    });

    function postToKen(value) {
        const url = `https://ken-backend.codegym.vn/boards/${BOARD_ID}/tasks`;
        console.log(value);
        const header = new Headers();
        header.append('Accept', 'application/json, text/plain, */*');
        header.append('Authorization', `Bearer ${TOKEN}`);
        header.append('Content-type', 'application/json');
        const playload = JSON.stringify({
            title: value,
            description: null,
            time_estimated: 15,
            color: 'f2d600',
            swimlane_id: CURRENT_WEEK,
            column_id: CURRENT_COLUMN,
            position: 0,
            board_id: BOARD_ID,
            time_estimated_type: 'minutes',
        });
        return fetch(url, {
            method: 'POST',
            headers: header,
            body: playload,
        });
    }
})();