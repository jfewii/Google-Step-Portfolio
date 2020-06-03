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

import com.google.gson.Gson;
import com.google.gson.GsonBuilder;
import java.util.ArrayList;
import java.util.List;
import java.io.IOException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;


/** Servlet that returns some example content. TODO: modify this file to handle comments data */
@WebServlet("/data")
public class DataServlet extends HttpServlet {

  private List<String> quotes;

  @Override
  public void init() {
    quotes = new ArrayList<>();
    quotes.add("You must be the change you wish to see in the world. - Gandhi");
    quotes.add("Creativity is intelligence having fun. - Albert Einstein");
    quotes.add(
        "Whether you think you can or you think you can't, "
            + "you're right. - Henry Ford");
    quotes.add(
        "Go confidently in the direction of your dreams. Live the life you have imagined. "
            + "- Henry David Thoreau");
    quotes.add("Everything has beauty, but not everyone can see. - Confucius");
    quotes.add("Impossible is nothing. - Muhammad Ali");
    quotes.add("Don't count the days, make the days count. - Muhammad Ali");
    quotes.add(
        "Darkness cannot drive out darkness; only light can do that. "
            + "Hate cannot drive out hate; only love can do that. - Martin Luther King Jr.");
    quotes.add("The time is always right to do what is right. - Martin Luther King Jr.");
  }


// Generates a randome quote from the ArrayList Quotes and converts the quote to a JSON object.
  @Override
  public void doGet(HttpServletRequest request, HttpServletResponse response) throws IOException {
    String quote = quotes.get((int) (Math.random() * quotes.size()));

    String json = convertToJSON(quote);
    response.setContentType("application/json;");
    response.getWriter().println(json);
  }

// Sends user to google with more information about their favorite quote and author.
  @Override
  public void doPost(HttpServletRequest request, HttpServletResponse response) throws IOException {
    // Get the input from the form.
    String userQuote = getParameter(request, "userQuote", "");
    String userQuoteAuthor = getParameter(request, "userQuoteAuthor", "");
    String userSearch = userQuote + " " + userQuoteAuthor;
    String GoogleSearch = String.join("+", userSearch.split(" "));
    response.sendRedirect("https://www.google.com/search?q=" + GoogleSearch);
  }  

  private String convertToJSON(String quotes) {
    GsonBuilder builder = new GsonBuilder();
    builder.disableHtmlEscaping();
    Gson gson = builder.create();
    return gson.toJson(quotes);
  }

  private String getParameter(HttpServletRequest request, String name, String defaultValue) {
    String value = request.getParameter(name);
    if (value == null) return defaultValue;
    return value;
  }
}
