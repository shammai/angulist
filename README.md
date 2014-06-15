angulist
========

angulist is an AngularJS module for incorporating AngularJS DataList in your page.

This module acts like an autocomplete directive.

Angulist takes an array of objects and creates a datalist element.
When the user selects an item from the list angulist will set the object that matches that item into a return object for use on the rest of your page.



Assuming the following variables:
<pre>
var myObj = {};
var myId = "myid";
var optiontextfield = "Name";
var objectArray = [{"Name":"Test Name 1", "Value":"1234"},{"Name": "Test Name 2","Value":"5678"}];
</pre>

Example Syntax:
<pre>
&lt;angulist returnObject="myObj" inputid="myId" optiontextfield="objName" localdata="objectArray" inputclass="form-control form-control-small" /&gt;
</pre>
The generated output would be:
<pre>
    ```
&lt;input id="myId" class="form-control form-control-small" ng-model="returnValue" list="myId-list"&gt;
&lt;datalist id="myId-list"&gt;
&lt;option&gt;Test Name 1&lt;/option&gt;
&lt;option&gt;Test Name 2&lt;/option&gt;
&lt;/datalist&gt;
    ```
</pre>

If the user selects the second option the returnObject value would be:
<pre>
`returnObject = {"Name":"Test Name 2", "Value": "5678"};`
</pre>
