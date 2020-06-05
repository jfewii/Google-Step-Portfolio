// Copyright 2019 Google LLC
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//     https://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

package com.google.sps.servlets;

import com.google.appengine.api.datastore.DatastoreService;
import com.google.appengine.api.datastore.DatastoreServiceFactory;
import com.google.appengine.api.datastore.Entity;
import com.google.appengine.api.datastore.PreparedQuery;
import com.google.appengine.api.datastore.Query;
import com.google.appengine.api.datastore.Query.SortDirection;
import com.google.gson.Gson;
import com.google.gson.GsonBuilder;
import com.google.sps.data.Question;
import java.io.IOException;
import java.io.PrintWriter;
import java.util.ArrayList;
import java.util.List;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

/** Servlet that returns some example content. TODO: modify this file to handle comments data */
@WebServlet("/data")
public class DataServlet extends HttpServlet {

  private static final String QUESTION_ENTITY_NAME = "name";
  private static final String QUESTION_ENTITY_TEXT = "text";
  private static final String QUESTION_ENTITY_TIMESTAMP = "timestamp";

  /** Returns all questions posted */
  @Override
  public void doGet(HttpServletRequest request, HttpServletResponse response) throws IOException {
    Query query = new Query("Questions").addSort(QUESTION_ENTITY_TIMESTAMP, SortDirection.DESCENDING);

    DatastoreService datastore = DatastoreServiceFactory.getDatastoreService();
    PreparedQuery results = datastore.prepare(query);

    List<Question> questions = new ArrayList<>();
    for (Entity questionEntity : results.asIterable()) {
      String name = (String) questionEntity.getProperty(QUESTION_ENTITY_NAME);
      String text = (String) questionEntity.getProperty(QUESTION_ENTITY_TEXT);
      long timestamp = (long) questionEntity.getProperty(QUESTION_ENTITY_TIMESTAMP);

      Question userQuestion = new Question(name, text, timestamp);
      questions.add(userQuestion);
    }

    response.setContentType("application/json;");
    response.getWriter().println(convertToJSON(questions));
  }

  /** Posts the users questions on a message board. */
  @Override
  public void doPost(HttpServletRequest request, HttpServletResponse response) throws IOException {

    String name = request.getParameter(QUESTION_ENTITY_NAME);
    String text = request.getParameter(QUESTION_ENTITY_TEXT);
    long timestamp = System.currentTimeMillis();

    Entity questionEntity = new Entity("Questions");
    questionEntity.setProperty(QUESTION_ENTITY_NAME, name);
    questionEntity.setProperty(QUESTION_ENTITY_TEXT, text);
    questionEntity.setProperty(QUESTION_ENTITY_TIMESTAMP, timestamp);

    DatastoreService datastore = DatastoreServiceFactory.getDatastoreService();
    datastore.put(questionEntity);

    response.sendRedirect("/index.html");
  }  

  private String convertToJSON(List questions) {
    GsonBuilder builder = new GsonBuilder();
    builder.disableHtmlEscaping();
    Gson gson = builder.create();
    return gson.toJson(questions);
  }

  private String getParameter(HttpServletRequest request, String name) {
    String value = request.getParameter(name);
    if (value == null) return "";
    return value;
  }
}
