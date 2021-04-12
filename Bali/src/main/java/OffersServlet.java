import java.io.*;
import javax.servlet.ServletException;
import javax.servlet.http.*;
import com.google.gson.Gson;


public class OffersServlet extends HttpServlet {
    private OfferList offerList = new OfferList();

    @Override
    public void doPost(HttpServletRequest request, HttpServletResponse response) throws IOException, ServletException {
        response.setContentType("json");
        int skip = 0;
        int top = 10;
        if(request.getParameter("skip") != null){
            skip = Integer.parseInt(request.getParameter("skip"));
        }
        if(request.getParameter("top") != null){
            top = Integer.parseInt(request.getParameter("top"));
        }
        response.getWriter().print((new Gson()
                .toJson(offerList.getPage(skip, top, (new Gson())
                        .fromJson(request.getReader().readLine(), OfferFilter.class)))));
    }

    @Override
    public void doPut(HttpServletRequest request, HttpServletResponse response) throws IOException, ServletException {
        response.setContentType("json");
        String[] uri = request.getRequestURI().split("/");
        switch (uri[2]){
            case "add": {
                response.getWriter()
                        .print((new Gson()).toJson(offerList
                                .addOffer((new Gson())
                                        .fromJson(request.getReader().readLine(), Offer.class))));
                break;
            }
            case "edit": {
                response.getWriter()
                        .print((new Gson()).toJson(offerList
                                .editOffer(request.getParameter("id"), (new Gson())
                                        .fromJson(request.getReader().readLine(), Offer.class))));
            }
        }
    }

    @Override
    public void doGet(HttpServletRequest request, HttpServletResponse response) throws IOException, ServletException {
        response.setContentType("json");
        response.getWriter().print((new Gson()).toJson(offerList.getOffer(request.getParameter("id"))));
    }

    @Override
    public void doDelete(HttpServletRequest request, HttpServletResponse response) throws IOException, ServletException {
        response.setContentType("json");
        response.getWriter().print((new Gson().toJson(offerList.removeOffer(request.getParameter("id")))));
    }
}
