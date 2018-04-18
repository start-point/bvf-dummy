// Optionen auswählen
function GetSelectedTextValue(selection) {
  
  var selectedText = selection.options[selection.selectedIndex].innerHTML;
  var selectedValue = selection.value;
  
  if (selection.name == "select-manufacturer") {
    document.getElementsByName("selected-manufacturer")[0].value = selectedText;
    // TODO
    document.getElementsByName("selected-type")[0].value = "Alle Typen";
    document.getElementsByName("selected-part")[0].value = "Alle Bauteile";
    document.getElementsByName("selected-file")[0].value = "Alle Dokumente";
    ShowSuitableManufacturer(selectedText);
  }
  if (selection.name == "select-type") {
    document.getElementsByName("selected-type")[0].value = selectedText;
    // TODO
    document.getElementsByName("selected-part")[0].value = "Alle Bauteile";
    document.getElementsByName("selected-file")[0].value = "Alle Dokumente";
    ShowSuitableType(selectedText);
  }
  if (selection.name == "select-part") {
    document.getElementsByName("selected-part")[0].value = selectedText;
    // TODO
    document.getElementsByName("selected-file")[0].value = "Alle Dokumente";
    ShowSuitablePart(selectedText)
  }
  if (selection.name == "select-file") {
    document.getElementsByName("selected-file")[0].value = selectedText;
    ShowSuitableFile(selectedText)
  }
};

// Listenelemnte ein- und ausblenden
var tablerow = document.getElementsByClassName("tablerow"), i;

function countSuitableDocuments() {
  var count = 0;
  for (i = 0; i < tablerow.length; i++) {
    if (tablerow[i].getAttribute("data-visible") == "1") {
      count += 1;
    }
  }
  document.getElementById("numberOfDocuments").innerHTML = count;
};
countSuitableDocuments();

function ShowSuitableManufacturer(selectedText) {
  for (i = 0; i < tablerow.length; i++) {
    var data = tablerow[i].getAttribute("data-manufacturer");
    if (selectedText == "Alle Hersteller") {
      tablerow[i].setAttribute("data-visible", "1");
    }
    else if (data == selectedText) {
      tablerow[i].setAttribute("data-visible", "1");
    }
    else {
      tablerow[i].setAttribute("data-visible", "0");
    }
  }
  countSuitableDocuments();
};

function ShowSuitableType(selectedText) {
  for (i = 0; i < tablerow.length; i++) {
    var data = tablerow[i].getAttribute("data-type");
    if (selectedText == "Alle Typen") {
      tablerow[i].setAttribute("data-visible", "1");
    }
    else if (data == selectedText) {
      tablerow[i].setAttribute("data-visible", "1");
    }
    else {
      tablerow[i].setAttribute("data-visible", "0");
    }
  }
  countSuitableDocuments();
};

function ShowSuitablePart(selectedText) {
  for (i = 0; i < tablerow.length; i++) {
    var data = tablerow[i].getAttribute("data-part");
    if (selectedText == "Alle Bauteile") {
      tablerow[i].setAttribute("data-visible", "1");
    }
    else if (data == selectedText) {
      tablerow[i].setAttribute("data-visible", "1");
    }
    else {
      tablerow[i].setAttribute("data-visible", "0");
    }
  }
  countSuitableDocuments();
};

function ShowSuitableFile(selectedText) {
  for (i = 0; i < tablerow.length; i++) {
    var data = tablerow[i].getAttribute("data-file");
    if (selectedText == "Alle Dokumente") {
      tablerow[i].setAttribute("data-visible", "1");
    }
    else if (data == selectedText) {
      tablerow[i].setAttribute("data-visible", "1");
    }
    else {
      tablerow[i].setAttribute("data-visible", "0");
    }
  }
  countSuitableDocuments();
};
