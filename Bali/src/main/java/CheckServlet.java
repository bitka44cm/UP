import java.io.*;
import javax.servlet.http.*;


public class CheckServlet extends HttpServlet {

    @Override
    public void doPost(HttpServletRequest request, HttpServletResponse response) throws IOException {
        response.setContentType("json");
        PrintWriter out = response.getWriter();
        out.println("{\"status\":\"true\"}");
    }
}
